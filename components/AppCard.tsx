
import React from 'react';
import { AppEntry, Language } from '../types';
import { UI_STRINGS, CATEGORY_TRANSLATIONS } from '../translations';

interface AppCardProps {
  app: AppEntry;
  lang: Language;
  onClick: (app: AppEntry) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, lang, onClick }) => {
  const content = app.translations[lang] || app.translations.en;
  const t = UI_STRINGS[lang];
  const catTrans = CATEGORY_TRANSLATIONS[lang][app.category] || app.category;

  return (
    <div 
      onClick={() => onClick(app)}
      className="group cursor-pointer bg-white rounded-[32px] overflow-hidden apple-shadow apple-shadow-hover transition-all duration-700 hover:-translate-y-2 flex flex-col h-full border border-gray-100/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={app.imageUrl} 
          alt={content.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute top-5 left-5">
          <span className="px-4 py-1.5 bg-white/70 backdrop-blur-xl rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-800 shadow-sm border border-white/40">
            {catTrans}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {content.name}
        </h3>
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">
          {content.subtitle}
        </p>
        <p className="text-base text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {content.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex gap-2">
            {app.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] bg-gray-50 text-gray-400 px-3 py-1.5 rounded-lg font-bold">
                #{tag.toUpperCase()}
              </span>
            ))}
          </div>
          <button 
            className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-bold group-hover:bg-blue-600 transition-all duration-300"
          >
            {t.launch}
          </button>
        </div>
      </div>
    </div>
  );
};
