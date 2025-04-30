import React from "react";
import { salad_data } from '../assets/salad/salad';
import "../index.css";

const salad = ({ addToCard, toggleFavorite, favoriteItems, lang }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">{salad_data[0]?.category?.[lang]}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {salad_data.map((salad, index) => (
          <div key={index} className="rounded-2xl p-4 bg-white">
            <button onClick={() => toggleFavorite(salad)} className="text-xl absolute">
              {favoriteItems.some((item) => item.id === salad.id) ? "❤️" : "🤍"}
            </button>
            <div className="w-full h-40 rounded-lg mb-3 flex items-center justify-center">
              <img src={salad.img} alt="" />
            </div>
            <h2 className="text pt-[40px]">{salad.title?.[lang]}</h2>
            <p className="text-p pt-[14px]">{salad.description?.[lang]}</p>
            <div className="flex justify-between items-center pt-[10px]">
              <span className="font-bold">{salad.price}₽</span>
              <button onClick={() => addToCard(salad)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
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

export default salad;
