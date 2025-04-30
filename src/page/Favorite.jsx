import React from "react";
import empty from "../assets/gif/empty.gif";
import "../index.css";

const Favorite = ({ favoriteItems, addToCard, removeFromFavorite, lang }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">
        {lang === "ru" && "Избранное"}
        {lang === "uz" && "Sevimlilar"}
        {lang === "en" && "Favorites"}
      </h1>

      {favoriteItems.length === 0 ? (
        <div className="flex justify-center">
          <img src={empty} alt="Empty Favorites" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-[30px]">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl p-4 bg-white shadow-md"
            >
              {/* ❤️ yurakcha tugmasi */}
              <button
                onClick={() => removeFromFavorite(item.id)}
                className="absolute top-2 left-2 text-red-500 text-xl"
              >
                ❤️
              </button>

              {item.isNew && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  NEW
                </div>
              )}
              <div className="w-full h-57 rounded-lg mb-3 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title?.[lang] || "Product"}
                  className="h-full object-contain"
                />
              </div>
              <h2 className="text">{item.title?.[lang]}</h2>
              <p className="text-p pt-[14px]">{item.description?.[lang]}</p>
              <div className="flex justify-between items-center pt-[10px]">
                <span className="font-bold text-[#797979]">{item.price}₽</span>
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
