import React from "react";
import { pasta_data } from "../assets/pasta/pasta";
import "../index.css";

const pasta = ({ addToCard, toggleFavorite, favoriteItems, lang }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">{pasta_data[0]?.category?.[lang]}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pasta_data.map((pasta, index) => (
          <div key={index} className="rounded-2xl p-4 bg-white">
            <button onClick={() => toggleFavorite(pasta)} className="text-xl absolute">
              {favoriteItems.some((item) => item.id === pasta.id) ? "❤️" : "🤍"}
            </button>
            <div className="w-full h-40 rounded-lg mb-3 flex items-center justify-center">
              <img src={pasta.img} alt="" />
            </div>
            <h2 className="text pt-[40px]">{pasta.title?.[lang]}</h2>
            <p className="text-p pt-[14px]">{pasta.description?.[lang]}</p>
            <div className="flex justify-between items-center pt-[10px]">
              <span className="font-bold">{pasta.price}₽</span>
              <button
                onClick={() => addToCard(pasta)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
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

export default pasta;
