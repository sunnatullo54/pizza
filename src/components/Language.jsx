import React, { useState } from "react";

const LanguageSelector = ({ setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "uz", label: "UZ" },
  ];

  const handleChange = (lang) => {
    setSelectedLang(lang.label);
    setLang(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="border rounded-[10px] p-[5px] w-[70px]">
        {selectedLang} ▼
      </button>
      {isOpen && (
        <div className="border rounded-[10px] flex flex-col justify-between items-center absolute z-10 w-[70px]">
          {languages.map((lang) => (
            <button key={lang.code} onClick={() => handleChange(lang)} className="dropdown-item flex">
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
