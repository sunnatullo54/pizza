import React, { useState } from 'react';
import { X, User, Phone, MapPin, CreditCard } from 'lucide-react';

const OrderModal = ({ isOpen, onClose, cartItems, totalPrice, lang }) => {
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert(lang === 'ru' ? 'Заказ успешно оформлен!' :
            lang === 'uz' ? 'Buyurtma muvaffaqiyatli rasmiylashtirildi!' :
            'Order placed successfully!');
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {lang === 'ru' ? 'Оформление заказа' :
               lang === 'uz' ? 'Buyurtmani rasmiylashtirish' :
               'Place Order'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <User className="w-4 h-4" />
                {lang === 'ru' ? 'Имя' :
                 lang === 'uz' ? 'Ism' :
                 'Name'}
              </label>
              <input
                type="text"
                required
                value={orderData.name}
                onChange={(e) => setOrderData({...orderData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Phone className="w-4 h-4" />
                {lang === 'ru' ? 'Телефон' :
                 lang === 'uz' ? 'Telefon' :
                 'Phone'}
              </label>
              <input
                type="tel"
                required
                value={orderData.phone}
                onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <MapPin className="w-4 h-4" />
                {lang === 'ru' ? 'Адрес доставки' :
                 lang === 'uz' ? 'Yetkazib berish manzili' :
                 'Delivery Address'}
              </label>
              <textarea
                required
                value={orderData.address}
                onChange={(e) => setOrderData({...orderData, address: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                rows="3"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <CreditCard className="w-4 h-4" />
                {lang === 'ru' ? 'Способ оплаты' :
                 lang === 'uz' ? 'To\'lov usuli' :
                 'Payment Method'}
              </label>
              <select
                value={orderData.paymentMethod}
                onChange={(e) => setOrderData({...orderData, paymentMethod: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              >
                <option value="cash">
                  {lang === 'ru' ? 'Наличными' :
                   lang === 'uz' ? 'Naqd pul' :
                   'Cash'}
                </option>
                <option value="card">
                  {lang === 'ru' ? 'Картой' :
                   lang === 'uz' ? 'Karta orqali' :
                   'Card'}
                </option>
              </select>
            </div>

            <div className="border-t pt-4">
              <div className="text-lg font-bold text-center">
                {lang === 'ru' ? 'Итого:' :
                 lang === 'uz' ? 'Jami:' :
                 'Total:'} {totalPrice}₽
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isSubmitting ? 
                (lang === 'ru' ? 'Оформляем...' :
                 lang === 'uz' ? 'Rasmiylashtirilmoqda...' :
                 'Processing...') :
                (lang === 'ru' ? 'Оформить заказ' :
                 lang === 'uz' ? 'Buyurtma berish' :
                 'Place Order')
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;