import React from "react";
import { drink_data } from '../assets/drink/drink';

const drink = ({ addToCard, lang }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">{drink_data[0]?.category?.[lang]}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-[30px]">
        {drink_data.map((drink, index) => (
          <div key={index} className="rounded-2xl p-4 bg-white">
            <div className="w-full h-40 rounded-lg mb-3 flex items-center justify-center">
              <img src={drink.img} alt="" />
            </div>
            <h2 className="text pt-[40px]">{drink.title?.[lang]}</h2>
            <p className="text-p pt-[14px]">{drink.description?.[lang]}</p>
            <div className="flex justify-between items-center pt-[10px]">
              <span className="font-bold">{drink.price}₽</span>
              <button onClick={() => addToCard(drink)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                {lang === "ru" && "В корзину"}
                {lang === "uz" && "Savatchaga qo'shish"}
                {lang === "en" && "Add to cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default drink;
