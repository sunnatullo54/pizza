import React from "react";
import empty from "../assets/gif/empty.gif";
import "../index.css";

const Card = ({ cardItems, increaseCount, decreaseCount, lang, remove }) => {
  const totalPrice = cardItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

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
            <div
              key={index}
              className="p-4 bg-white shadow rounded md:flex md:justify-between md:items-center"
            >
              <div className="flex flex-col md:flex-row md:items-center md:gap-[30px]">
                <div className="flex gap-4 items-center">
                  <img
                    src={item.img}
                    className="w-[100px]"
                    alt={item.title?.ru}
                  />
                  <div className="flex items-center gap-3 md:hidden">
                    <button
                      onClick={() => decreaseCount(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded text-lg"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">{item.count}</span>
                    <button
                      onClick={() => increaseCount(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded text-lg"
                    >
                      +
                    </button>
                    <button
                      onClick={() => remove(item.id)}
                      className="text-red-500"
                    >
                      ✖
                    </button>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <h2 className="text text-lg font-bold">
                    {item.title?.[lang]}
                  </h2>
                  <p className="text-p text-sm text-gray-600">
                    {item.description?.[lang]}
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => decreaseCount(item.id)}
                  className="px-2 py-1 bg-gray-300 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg font-bold">{item.count}</span>
                <button
                  onClick={() => increaseCount(item.id)}
                  className="px-2 py-1 bg-gray-300 rounded text-lg"
                >
                  +
                </button>
                <button
                  onClick={() => remove(item.id)}
                  className="text-red-500"
                >
                  ✖
                </button>
              </div>

              <span className="text-yellow-500 font-bold mt-4 md:mt-0 block text-right md:text-left">
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
