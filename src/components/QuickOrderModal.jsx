import React, { useState } from 'react';
import { X, Phone, Clock, MapPin } from 'lucide-react';

const QuickOrderModal = ({ isOpen, onClose, lang }) => {
  const [orderData, setOrderData] = useState({
    phone: '',
    name: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(lang === 'ru' ? 'Мы свяжемся с вами в течение 5 минут!' :
            lang === 'uz' ? '5 daqiqa ichida siz bilan bog\'lanamiz!' :
            'We will contact you within 5 minutes!');
      setIsSubmitting(false);
      onClose();
      setOrderData({ phone: '', name: '', address: '' });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {lang === 'ru' ? 'Быстрый заказ' :
             lang === 'uz' ? 'Tezkor buyurtma' :
             'Quick order'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 text-yellow-800 mb-2">
            <Clock className="w-5 h-5" />
            <span className="font-medium">
              {lang === 'ru' ? 'Быстрое оформление' :
               lang === 'uz' ? 'Tezkor rasmiylashtirish' :
               'Quick processing'}
            </span>
          </div>
          <p className="text-sm text-yellow-700">
            {lang === 'ru' ? 'Оставьте свои данные и мы перезвоним в течение 5 минут' :
             lang === 'uz' ? 'Ma\'lumotlaringizni qoldiring, 5 daqiqa ichida qo\'ng\'iroq qilamiz' :
             'Leave your details and we will call back within 5 minutes'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4" />
              {lang === 'ru' ? 'Телефон' : lang === 'uz' ? 'Telefon' : 'Phone'}
            </label>
            <input
              type="tel"
              required
              value={orderData.phone}
              onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              {lang === 'ru' ? 'Имя' : lang === 'uz' ? 'Ism' : 'Name'}
            </label>
            <input
              type="text"
              required
              value={orderData.name}
              onChange={(e) => setOrderData({...orderData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder={lang === 'ru' ? 'Ваше имя' : lang === 'uz' ? 'Ismingiz' : 'Your name'}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4" />
              {lang === 'ru' ? 'Адрес (необязательно)' : lang === 'uz' ? 'Manzil (ixtiyoriy)' : 'Address (optional)'}
            </label>
            <input
              type="text"
              value={orderData.address}
              onChange={(e) => setOrderData({...orderData, address: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder={lang === 'ru' ? 'Ваш адрес' : lang === 'uz' ? 'Sizning manzilingiz' : 'Your address'}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-black font-bold py-4 rounded-lg transition-all duration-200"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                {lang === 'ru' ? 'Отправляем...' : lang === 'uz' ? 'Yuborilmoqda...' : 'Sending...'}
              </div>
            ) : (
              lang === 'ru' ? 'Заказать звонок' : lang === 'uz' ? 'Qo\'ng\'iroq buyurtma qilish' : 'Request call'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickOrderModal;