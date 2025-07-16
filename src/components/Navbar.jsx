import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logo, star, yandexEda, point } from "../assets/data";
import LanguageSelector from "./Language";
import DarkModeToggle from "./DarkModeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ cartItems, lang, setLang, isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toCard = () => {
    navigate("./Card");
  };
  const toFavorite = () => {
    navigate("./Favorite");
  };

  const menuItems = [
    { path: "/", label: { ru: "Главная", uz: "Bosh sahifa", en: "Home" } },
    { path: "/Pizza", label: { ru: "Пицца", uz: "Pitsa", en: "Pizza" } },
    { path: "/Paste", label: { ru: "Паста", uz: "Makaron", en: "Pasta" } },
    { path: "/Soups", label: { ru: "Супы", uz: "Sho'rvalar", en: "Soups" } },
    { path: "/Salads", label: { ru: "Салаты", uz: "Salatlar", en: "Salads" } },
    {
      path: "/Drinks",
      label: { ru: "Напитки", uz: "Ichimliklar", en: "Drinks" },
    },
    { path: "/Stock", label: { ru: "Акции", uz: "Aksiyalar", en: "Stock" } },
    {
      path: "/Contacts",
      label: { ru: "Контакты", uz: "Kontaktlar", en: "Contacts" },
    },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Info */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-20 md:w-24" />
            <div className="hidden md:block text-sm">
              <div className="font-montserrat font-semibold text-base leading-tight text-gray-800 dark:text-gray-200">
                {lang === "ru" && "Доставка пасты"}{" "}
                {lang === "uz" && "Makaron yetkazib berish"}{" "}
                {lang === "en" && "Pasta delivery"}
                <span className="text-yellow-500 ml-1">
                  {lang === "ru" && "Москва"} {lang === "uz" && "Moskva"}{" "}
                  {lang === "en" && "Moscow"}
                </span>
              </div>
              <div className="flex items-center font-montserrat font-medium text-xs leading-tight pt-2 gap-4 text-gray-600 dark:text-gray-400">
                <span className="flex gap-1 items-center">
                  <img src={yandexEda} alt="" className="w-4 h-4" />
                  {lang === "ru" && "Яндекс еда"}{" "}
                  {lang === "uz" && "Yandex taomlari"}{" "}
                  {lang === "en" && "Yandex food"}
                  <img src={point} alt="" className="w-1 h-3 mx-1" />
                  <span className="flex gap-1 items-center">
                    4.8 <img src={star} alt="" className="w-4 h-4" />
                  </span>
                </span>
                <span className="flex gap-1 items-center">
                  {lang === "ru" && "Время доставки"}
                  {lang === "uz" && "Yetkazish vaqti"}
                  {lang === "en" && "Delivery time"}
                  <img src={point} alt="" className="w-1 h-3 mx-1" />
                  {lang === "ru" && "от 31 мин"}
                  {lang === "uz" && "31 daqiqadan boshlab"}
                  {lang === "en" && "from 31 min"}
                </span>
              </div>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            <button className="button hidden lg:block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              {lang === "ru" && "Заказать звонок"}
              {lang === "uz" && "Qo'ng'iroqni talab qiling"}
              {lang === "en" && "Request a call"}
            </button>
            <div className="text-yellow-500 font-bold text-lg hidden lg:block">
              8 499 391-84-49
            </div>
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <ul className="flex flex-col gap-1 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-yellow-400 text-black font-semibold"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label[lang]}
                    </NavLink>
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-2">
                <button onClick={toFavorite} className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors">
                  {lang === "ru" && "Избранное"}
                  {lang === "uz" && "Sevimlilar"}
                  {lang === "en" && "Favorites"}
                </button>
                <button onClick={toCard} className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                  {lang === "ru" && "Корзина"}
                  {lang === "uz" && "Savatcha"}
                  {lang === "en" && "Cart"} ({cartItems.length})
                </button>
              </div>
              
              <div className="flex justify-center">
                <LanguageSelector setLang={setLang} />
              </div>
            </div>
          </div>
        )}

        {/* Desktop menu */}
        <div className="hidden md:flex justify-between items-center py-2">
          <ul className="flex gap-1 bg-gray-50 dark:bg-gray-800 p-2 rounded-xl">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "bg-yellow-400 text-black shadow-sm"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`
                  }
                >
                  {item.label[lang]}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button onClick={toFavorite} className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors">
              {lang === "ru" && "Избранное"}
              {lang === "uz" && "Sevimlilar"}
              {lang === "en" && "Favorites"}
            </button>
            
            <button onClick={toCard} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
              {lang === "ru" && "Корзина"}
              {lang === "uz" && "Savatcha"}
              {lang === "en" && "Cart"} ({cartItems.length})
            </button>

            <LanguageSelector setLang={setLang} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;