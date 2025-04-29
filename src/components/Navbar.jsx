import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logo, star, yandexEda, point } from "../assets/data";
import LanguageSelector from "./Language";

const Navbar = ({ cartItems, lang, setLang }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toCard = () => {
    navigate("./Card");
  };

  const menuItems = [
    { path: "/", label: { ru: "Дом", uz: "Bosh sahifa", en: "Home" } },
    { path: "/Pizza", label: { ru: "Пицца", uz: "Pitsa", en: "Pizza" } },
    { path: "/Paste", label: { ru: "Паста", uz: "Makaron", en: "Pasta" } },
    { path: "/Soups", label: { ru: "Супы", uz: "Sho‘rvalar", en: "Soups" } },
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
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-24 md:w-auto" />
          <div className="hidden md:block text-sm">
            <div className="font-[Montserrat] font-semibold text-[17px] leading-[100%]">
              {lang === "ru" && "Доставка пасты"}{" "}
              {lang === "uz" && "Makaron yetkazib berish"}{" "}
              {lang === "en" && "Pasta delivery"}
              <span className="text-yellow-500">
                {" "}
                {lang === "ru" && "Москва"} {lang === "uz" && "Moskva"}{" "}
                {lang === "en" && "Moscow"}
              </span>
            </div>
            <div className="flex items-center font-[Montserrat] font-semibold text-[13px] leading-[100%] pt-2 gap-4">
              <span className="flex gap-1 items-center">
                <img src={yandexEda} alt="" className="w-4 h-4" />
                {lang === "ru" && "Яндекс еда"}{" "}
                {lang === "uz" && "Yandex taomlari"}{" "}
                {lang === "en" && "Yandex food"}
                <img src={point} alt="" className="w-1 h-3" />
                <span className="flex gap-1 items-center">
                  4.8 <img src={star} alt="" className="w-4 h-4" />
                </span>
              </span>
              <span className="flex gap-1 items-center">
                {lang === "ru" && "Время доставки"}
                {lang === "uz" && "Yetkazish vaqti"}
                {lang === "en" && "Delivery time"}
                <img src={point} alt="" className="w-1 h-3" />
                {lang === "ru" && "от 31 мин"}
                {lang === "uz" && "31 daqiqadan boshlab"}
                {lang === "en" && "from 31 min"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="button hidden md:block">
            {lang === "ru" && "Заказать звонок"}
            {lang === "uz" && "Qo'ng'iroqni talab qiling"}
            {lang === "en" && "Request a call"}
          </button>
          <div className="text-yellow-500 font-bold text-lg hidden md:block">
            8 499 391-84-49
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center px-3 py-2 border rounded text-black border-black"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4">
          <ul className="flex flex-col gap-2 bg-gray-100 p-4 rounded-xl w-full text-center">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white px-4 py-2 rounded-xl shadow text-black font-semibold block"
                      : "px-4 py-2 text-black hover:bg-gray-200 rounded-xl block"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label[lang]}
                </NavLink>
              </li>
            ))}
          </ul>
          <button onClick={toCard} className="Basket w-full">
            {lang === "ru" && "Корзина"}
            {lang === "uz" && "Savatcha"}
            {lang === "en" && "Cart"} | {cartItems.length}
          </button>
          <div className="w-full text-center py-2">
            <LanguageSelector setLang={setLang} />
          </div>
        </div>
      )}
      <div className="hidden md:flex justify-between items-center">
        <ul className="flex gap-4 bg-gray-100 p-2 rounded-xl">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white px-4 py-2 rounded-xl shadow text-black font-semibold"
                    : "px-4 py-2 text-black hover:bg-gray-200 rounded-xl"
                }
              >
                {item.label[lang]}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-[15px]">
          <button onClick={toCard} className="Basket">
            {lang === "ru" && "Корзина"}
            {lang === "uz" && "Savatcha"}
            {lang === "en" && "Cart"} | {cartItems.length}
          </button>

          <div className="order-1 md:order-2">
            <LanguageSelector setLang={setLang} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
