const LanguageSelector = ({ setLang }) => {
  return (
    <div className="relative">
      <div className="flex bg-white shadow-md">
        <button onClick={() => setLang("ru")} className="block px-4 py-2 hover:bg-gray-100">Ru</button>
        <button onClick={() => setLang("en")} className="block px-4 py-2 hover:bg-gray-100">En</button>
        <button onClick={() => setLang("uz")} className="block px-4 py-2 hover:bg-gray-100">Uz</button>
      </div>
    </div>
  );
};

export default LanguageSelector;
