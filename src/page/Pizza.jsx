import React from "react";
import { pizza_data } from "../assets/data";
import "../index.css";

const Pizza = ({ addToCard, toggleFavorite, favoriteItems, lang }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">{pizza_data[0]?.category?.[lang]}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-[30px]">
        {pizza_data.map((pizza) => (
          <div
            key={pizza.id}
            className="relative rounded-2xl p-4 bg-white shadow-md"
          >
            {pizza.isNew && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                NEW
              </div>
            )}
            <button onClick={() => toggleFavorite(pizza)} className="text-xl absolute">
              {favoriteItems.some((item) => item.id === pizza.id) ? "❤️" : "🤍"}
            </button>
            <div className="w-full h-57 rounded-lg mb-3 flex items-center justify-center">
              <img
                src={pizza.img}
                alt={pizza.title?.[lang] || "Pizza"}
                className="h-full object-contain"
              />
            </div>
            <h2 className="text">{pizza.title?.[lang]}</h2>
            <p className="text-p pt-[14px]">{pizza.description?.[lang]}</p>
            <div className="flex justify-between items-center pt-[10px]">
              <span className="font-bold text-[#797979]">{pizza.price}₽</span>
              <button
                onClick={() => addToCard(pizza)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition"
              >
                {lang === "ru" && "В корзину"}
                {lang === "uz" && "Savatga"}
                {lang === "en" && "Add to cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
