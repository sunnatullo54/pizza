import React from "react";
import { stock_data } from "../assets/stock/stock";

const Stock = ({ lang }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">{stock_data[0]?.category?.[lang]}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {stock_data.map((stock, index) => (
          <div key={index} className="rounded-2xl p-4 bg-white">
            <div className="w-full h-40 rounded-lg flex items-center justify-center">
              <img src={stock.img} alt="" />
            </div>
            <h2 className="text">{stock.title?.[lang]}</h2>
            <p className="text-p pt-[14px]">{stock.description?.[lang]}</p>
            <div className="flex justify-between items-center pt-[10px]">
              <span className="font-bold">{stock.price}₽</span>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
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

export default Stock;
