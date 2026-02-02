
import React, { useState, useMemo, useEffect } from 'react';
import { APP_LIST, CATEGORIES } from './constants';
import { AppEntry, Category, View, Language } from './types';
import { UI_STRINGS, CATEGORY_TRANSLATIONS } from './translations';
import { AppCard } from './components/AppCard';
import { AppDetail } from './components/AppDetail';
import { getAppRecommendation } from './services/geminiService';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [activeView, setActiveView] = useState<View>('home');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(['All']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState<AppEntry | null>(null);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const t = UI_STRINGS[lang];

  // Sync Hash with View
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as View;
      if (['home', 'apps', 'categories', 'about'].includes(hash)) {
        setActiveView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleCategory = (cat: Category) => {
    if (cat === 'All') {
      setSelectedCategories(['All']);
      return;
    }

    setSelectedCategories(prev => {
      let next: Category[];
      if (prev.includes(cat)) {
        next = prev.filter(c => c !== cat);
      } else {
        next = [...prev.filter(c => c !== 'All'), cat];
      }
      return next.length === 0 ? ['All'] : next;
    });
  };

  const filteredApps = useMemo(() => {
    return APP_LIST.filter(app => {
      const content = app.translations[lang] || app.translations.en;
      const matchesCategory = selectedCategories.includes('All') || selectedCategories.includes(app.category);
      const matchesSearch = content.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            app.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategories, searchQuery, lang]);

  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsAiLoading(true);
    setAiResponse(null);
    const rec = await getAppRecommendation(searchQuery, lang);
    setAiResponse(rec);
    setIsAiLoading(false);
  };

  const featuredApp = APP_LIST.find(a => a.featured) || APP_LIST[0];
  const featuredContent = featuredApp.translations[lang] || featuredApp.translations.en;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 glass-morphism border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div 
            onClick={() => { window.location.hash = 'home'; setSelectedCategories(['All']); }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center shadow-lg transform rotate-6">
              <span className="text-white font-black text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight leading-none">Turi Apps</span>
              <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">By Turi</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className={`text-sm font-semibold transition-colors ${activeView === 'home' ? 'text-blue-600' : 'text-gray-500 hover:text-black'}`}>{t.navHome}</a>
            <a href="#apps" className={`text-sm font-semibold transition-colors ${activeView === 'apps' ? 'text-blue-600' : 'text-gray-500 hover:text-black'}`}>{t.navApps}</a>
            <a href="#categories" className={`text-sm font-semibold transition-colors ${activeView === 'categories' ? 'text-blue-600' : 'text-gray-500 hover:text-black'}`}>{t.navCategories}</a>
            <a href="#about" className={`text-sm font-semibold transition-colors ${activeView === 'about' ? 'text-blue-600' : 'text-gray-500 hover:text-black'}`}>{t.navAbout}</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-100"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">{lang}</span>
              </button>
              
              {isLangMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-40 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-in fade-in zoom-in-95 duration-200 z-20">
                    {(['en', 'es', 'de'] as Language[]).map(l => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setIsLangMenuOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-all ${lang === l ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        <span className="flex items-center justify-between">
                          {l === 'en' ? 'English' : l === 'es' ? 'Español' : 'Deutsch'}
                          {lang === l && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <span className="hidden sm:inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {t.freeToUse}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section (Only on Home) */}
      {activeView === 'home' && (
        <section className="relative pt-20 pb-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none gradient-text">
                  {t.heroTitle.split('.').map((part, i) => part ? <span key={i}>{part}<br /></span> : null)}
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-lg leading-relaxed">
                  {t.heroSubtitle}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => window.location.hash = 'apps'}
                  className="px-8 py-4 bg-black text-white rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-gray-200"
                >
                  {t.exploreApps}
                </button>
                <button className="px-8 py-4 bg-transparent text-black border border-gray-200 rounded-full text-lg font-bold hover:bg-gray-50 transition-colors">
                  {t.meetCreator}
                </button>
              </div>
            </div>

            <div 
              onClick={() => setSelectedApp(featuredApp)}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative rounded-[40px] overflow-hidden apple-shadow apple-shadow-hover transition-all duration-700 hover:scale-[1.02]">
                <img src={featuredApp.imageUrl} alt="Featured" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-10">
                  <span className="text-white/60 text-sm font-bold tracking-widest uppercase mb-2">{t.featuredProject}</span>
                  <h2 className="text-4xl font-bold text-white mb-2">{featuredContent.name}</h2>
                  <p className="text-white/80 text-lg font-medium max-w-md">{featuredContent.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                  selectedCategories.includes(cat) 
                  ? 'bg-black text-white border-black shadow-lg' 
                  : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'
                }`}
              >
                {CATEGORY_TRANSLATIONS[lang][cat] || cat}
                {cat !== 'All' && selectedCategories.includes(cat) && (
                  <span className="ml-2 inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <div className="w-full md:w-96 relative group">
            <form onSubmit={handleAiSearch}>
              <input 
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white rounded-2xl border-none apple-shadow transition-all duration-300 focus:ring-2 focus:ring-blue-500 group-hover:scale-[1.01]"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button 
                  type="submit"
                  disabled={isAiLoading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors disabled:opacity-50"
                  title="Ask Gemini"
                >
                  {isAiLoading ? (
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>

        {/* Selected Filter Summary */}
        {!selectedCategories.includes('All') && (
          <div className="mb-8 flex items-center gap-3 text-sm font-medium text-gray-400 animate-in fade-in slide-in-from-left-4">
            <span>{t.showingResultsFor}</span>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map(cat => (
                <span key={cat} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg">
                  {CATEGORY_TRANSLATIONS[lang][cat] || cat}
                </span>
              ))}
              <button 
                onClick={() => setSelectedCategories(['All'])}
                className="text-blue-500 hover:text-blue-700 font-bold ml-1"
              >
                {t.clearAll}
              </button>
            </div>
          </div>
        )}

        {/* AI Response Display */}
        {aiResponse && (
          <div className="mb-12 p-8 bg-blue-50/50 rounded-[32px] border border-blue-100 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="space-y-4">
                <p className="text-blue-900 font-medium leading-relaxed">
                  {aiResponse}
                </p>
                <button 
                  onClick={() => setAiResponse(null)}
                  className="text-xs font-bold text-blue-400 hover:text-blue-600 uppercase tracking-widest"
                >
                  {t.dismissSuggestion}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 transition-all duration-500">
          {filteredApps.map(app => (
            <div key={app.id} className="animate-in fade-in zoom-in-95 duration-500">
              <AppCard app={app} lang={lang} onClick={setSelectedApp} />
            </div>
          ))}
          {filteredApps.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">{t.noAppsFound}</h3>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategories(['All']); }}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                {t.resetFilters}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-black">T</span>
              </div>
              <span className="text-xl font-bold">Turi Apps</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              {t.footerDescription}
            </p>
            <p className="text-sm text-gray-400">{t.rightsReserved}</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400">{t.catalogue}</h4>
            <ul className="space-y-2">
              <li><a href="#apps" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.browseAll}</a></li>
              <li><a href="#categories" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.navCategories}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.developerApi}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400">{t.connect}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.aboutTuri}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.contact}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.newsletter}</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* App Detail Modal */}
      {selectedApp && (
        <AppDetail 
          app={selectedApp} 
          lang={lang}
          onClose={() => setSelectedApp(null)} 
        />
      )}
    </div>
  );
};

export default App;
