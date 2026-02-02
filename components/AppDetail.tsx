
import React, { useEffect } from 'react';
import { AppEntry, Language } from '../types';
import { UI_STRINGS, CATEGORY_TRANSLATIONS } from '../translations';

interface AppDetailProps {
  app: AppEntry;
  lang: Language;
  onClose: () => void;
}

export const AppDetail: React.FC<AppDetailProps> = ({ app, lang, onClose }) => {
  const content = app.translations[lang] || app.translations.en;
  const t = UI_STRINGS[lang];
  const catTrans = CATEGORY_TRANSLATIONS[lang][app.category] || app.category;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white transition-all duration-500 animate-in fade-in slide-in-from-bottom-10">
      {/* Header Sticky Bar */}
      <div className="sticky top-0 z-50 glass-morphism border-b border-gray-100/50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={app.imageUrl} className="w-8 h-8 rounded-lg object-cover" alt="" />
          <h2 className="text-lg font-bold">{content.name}</h2>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Section */}
          <div className="rounded-[40px] overflow-hidden apple-shadow">
            <img src={app.imageUrl} alt={content.name} className="w-full object-cover" />
          </div>

          {/* Info Section */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
                {catTrans}
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-none mb-6">
                {content.name}
              </h1>
              <p className="text-2xl font-medium text-gray-500 leading-relaxed italic">
                {content.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {content.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {app.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row items-center gap-6">
              <a 
                href={app.launchUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20 text-center"
              >
                {t.launchApp}
              </a>
              <p className="text-sm text-gray-400 font-medium">
                {t.freeToUse} • {t.openNewTab}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
