import React from "react";
import empty from "../assets/gif/empty.gif";
import "../index.css";

const Card = ({ cardItems, increaseCount, decreaseCount, lang }) => {
  const totalPrice = cardItems.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="container">
      <h1 className="text-yellov">
        {lang === "ru" && "Корзина"}
        {lang === "uz" && "Savat"}
        {lang === "en" && "Basket"}
      </h1>
      {cardItems.length === 0 ? (
        <div className="flex justify-center">
          <img src={empty} alt="Empty Cart" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cardItems.map((item, index) => (
            <div key={index} className="p-4 bg-white shadow rounded flex justify-between items-center">
              <div className="flex gap-[30px] items-center">
                <img src={item.img} className="w-[100px]" alt={item.title?.ru} />
                <div>
                  <h2 className="text text-lg font-bold">{item.title?.[lang]}</h2>
                  <p className="text-p text-sm text-gray-600 w-[600px]">
                    {item.description?.[lang]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => decreaseCount(item.id)} className="px-2 py-1 bg-gray-300 rounded text-lg">-</button>
                <span className="text-lg font-bold">{item.count}</span>
                <button onClick={() => increaseCount(item.id)} className="px-2 py-1 bg-gray-300 rounded text-lg">+</button>
              </div>

              <span className="text-yellow-500 block font-bold">
                {item.price * item.count}₽
              </span>
            </div>
          ))}

          <div className="text-yellow-500 text-right font-bold text-xl mt-6">
            Общий: {totalPrice}₽
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
