import React from "react";
import { soups_data } from '../assets/soups/soups';
import "../index.css";

const soups = ({ addToCard, toggleFavorite, favoriteItems, lang }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">{soups_data[0]?.category?.[lang]}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {soups_data.map((soups, index) => (
          <div key={index} className="rounded-2xl p-4 bg-white">
            <button onClick={() => toggleFavorite(soups)} className="text-xl absolute">
              {favoriteItems.some((item) => item.id === soups.id) ? "❤️" : "🤍"}
            </button>
            <div className="w-full h-40 rounded-lg mb-3 flex items-center justify-center">
              <img src={soups.img} alt="" />
            </div>
            <h2 className="text pt-[40px]">{soups.title?.[lang]}</h2>
            <p className="text-p pt-[14px]">{soups.description?.[lang]}</p>
            <div className="flex justify-between items-center pt-[10px]">
              <span className="font-bold">{soups.price}₽</span>
              <button onClick={() => addToCard(soups)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
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

export default soups;