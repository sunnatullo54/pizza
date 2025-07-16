import React from "react";
import { useState } from "react";
import empty from "../assets/gif/empty.gif";
import ImprovedOrderModal from "../components/ImprovedOrderModal";
import { Trash2, Plus, Minus } from "lucide-react";
import "../index.css";

const Card = ({ cardItems, increaseCount, decreaseCount, lang, remove, showNotification }) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  const totalPrice = cardItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  const handleOrderSuccess = (orderInfo) => {
    showNotification?.('success', 
      lang === 'ru' ? `Заказ №${orderInfo.orderNumber} успешно оформлен!` :
      lang === 'uz' ? `${orderInfo.orderNumber}-buyurtma muvaffaqiyatli rasmiylashtirildi!` :
      `Order #${orderInfo.orderNumber} placed successfully!`
    );
  };

  return (
    <div className="container">
      <h1 className="text-yellov">
        {lang === "ru" && "Корзина"}
        {lang === "uz" && "Savat"}
        {lang === "en" && "Basket"}
      </h1>
      {cardItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <img src={empty} alt="Empty Cart" />
          <p className="text-gray-500 mt-4 text-lg">
            {lang === 'ru' ? 'Ваша корзина пуста' :
             lang === 'uz' ? 'Savatingiz bo\'sh' :
             'Your cart is empty'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex gap-4 items-center flex-1">
                  <img
                    src={item.img}
                    className="w-20 h-20 object-cover rounded-lg"
                    alt={item.title?.ru}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {item.title?.[lang]}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description?.[lang]}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-lg font-bold text-yellow-600">
                        {item.price}₽
                      </span>
                      <span className="text-sm text-gray-500">
                        {lang === 'ru' ? 'за штуку' :
                         lang === 'uz' ? 'dona uchun' :
                         'per item'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile controls */}
                <div className="flex items-center justify-between md:hidden">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseCount(item.id)}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-bold min-w-[2rem] text-center">{item.count}</span>
                    <button
                      onClick={() => increaseCount(item.id)}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Desktop controls */}
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseCount(item.id)}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-bold min-w-[2rem] text-center">{item.count}</span>
                    <button
                      onClick={() => increaseCount(item.id)}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-800">
                      {item.price * item.count}₽
                    </div>
                  </div>
                  
                  <button
                    onClick={() => remove(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile total */}
                <div className="md:hidden text-right">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title?.[lang]}
                  </h2>
                  <p className="text-p text-sm text-gray-600">
                    {item.description?.[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-6 mt-6">
            <div className="flex justify-between items-center text-2xl font-bold text-gray-800">
              <span>
                {lang === 'ru' ? 'Итого:' :
                 lang === 'uz' ? 'Jami:' :
                 'Total:'}
              </span>
              <span className="text-yellow-600">{totalPrice}₽</span>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              {lang === 'ru' ? 'Оформить заказ' :
               lang === 'uz' ? 'Buyurtma berish' :
               'Place Order'}
            </button>
          </div>
        </div>
      )}
      
      <ImprovedOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cartItems={cardItems}
        totalPrice={totalPrice}
        lang={lang}
        onOrderSuccess={handleOrderSuccess}
      />
    </div>
  );
};

export default Card;
