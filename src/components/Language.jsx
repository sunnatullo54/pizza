import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const LanguageSelector = ({ setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("RU");

  const languages = [
    { code: "ru", label: "RU", flag: "🇷🇺" },
    { code: "uz", label: "UZ", flag: "🇺🇿" },
    { code: "en", label: "EN", flag: "🇺🇸" },
  ];

  const handleChange = (lang) => {
    setSelectedLang(lang.label);
    setLang(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-w-[80px]"
      >
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {languages.find(lang => lang.label === selectedLang)?.flag} {selectedLang}
        </span>
        <ChevronDownIcon className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 min-w-[80px]">
          {languages.map((lang) => (
            <button 
              key={lang.code} 
              onClick={() => handleChange(lang)} 
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;