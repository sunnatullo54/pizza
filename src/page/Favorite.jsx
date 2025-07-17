import React from "react";
import empty from "../assets/gif/empty.gif";
import "../index.css";

const Favorite = ({ favoriteItems, addToCard, removeFromFavorite, lang }) => {
  return (
    <div className="container">
      <h1 className="text-yellov dark:text-white">
        {lang === "ru" && "Избранное"}
        {lang === "uz" && "Sevimlilar"}
        {lang === "en" && "Favorites"}
      </h1>

      {favoriteItems.length === 0 ? (
        <div className="flex justify-center py-10">
          <img src={empty} alt="Empty Favorites" className="w-72" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-[30px]">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl p-4 bg-white dark:bg-zinc-800 shadow-md dark:shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* ❤️ Like tugmasi - dumaloq fonli va o‘ng yuqorida */}
              <button
                onClick={() => removeFromFavorite(item.id)}
                className="absolute top-3 right-3 bg-white dark:bg-zinc-700 text-red-500 p-2 rounded-full shadow hover:scale-110 transition"
              >
                ❤️
              </button>

              {item.isNew && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  NEW
                </div>
              )}

              <div className="w-full h-57 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title?.[lang] || "Product"}
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h2 className="text dark:text-white">{item.title?.[lang]}</h2>
              <p className="text-p pt-[14px] dark:text-gray-400">
                {item.description?.[lang]}
              </p>

              <div className="flex justify-between items-center pt-[10px]">
                <span className="font-bold text-[#797979] dark:text-white">{item.price}₽</span>
                <button
                  onClick={() => addToCard(item)}
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
      )}
    </div>
  );
};

export default Favorite;
