import React, { useState } from 'react';
import { X, User, Phone, MapPin, CreditCard, Clock, Truck } from 'lucide-react';
import { PAYMENT_METHODS, DELIVERY_INFO } from '../utils/constants';
import { telegramBot } from '../services/telegramBot';

const ImprovedOrderModal = ({ isOpen, onClose, cartItems, totalPrice, lang, onOrderSuccess }) => {
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash',
    notes: '',
    deliveryTime: 'asap'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!orderData.name.trim()) {
      newErrors.name = lang === 'ru' ? 'Введите имя' :
                       lang === 'uz' ? 'Ismni kiriting' :
                       'Enter name';
    }
    
    if (!orderData.phone.trim()) {
      newErrors.phone = lang === 'ru' ? 'Введите телефон' :
                        lang === 'uz' ? 'Telefonni kiriting' :
                        'Enter phone';
    }
    
    if (!orderData.address.trim()) {
      newErrors.address = lang === 'ru' ? 'Введите адрес' :
                          lang === 'uz' ? 'Manzilni kiriting' :
                          'Enter address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const deliveryFee = totalPrice >= DELIVERY_INFO.freeDeliveryAmount ? 0 : DELIVERY_INFO.deliveryFee;
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderNumber = Math.floor(Math.random() * 10000);
      
      // Telegram botga xabar yuborish
      if (telegramBot) {
        try {
          await telegramBot.sendOrderNotification({
            ...orderData,
            total: finalTotal,
            orderNumber
          }, cartItems, lang);
        } catch (error) {
          console.error('Telegram bot xatosi:', error);
        }
      }
      
      onOrderSuccess?.({
        orderNumber,
        estimatedTime: DELIVERY_INFO.estimatedTime,
        total: finalTotal
      });
      
      onClose();
    } catch (error) {
      console.error('Order submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {lang === 'ru' ? 'Оформление заказа' :
               lang === 'uz' ? 'Buyurtmani rasmiylashtirish' :
               'Place Order'}
            </h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">
              {lang === 'ru' ? 'Ваш заказ' :
               lang === 'uz' ? 'Sizning buyurtmangiz' :
               'Your Order'}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{lang === 'ru' ? 'Товары:' : lang === 'uz' ? 'Mahsulotlar:' : 'Items:'}</span>
                <span>{totalPrice}₽</span>
              </div>
              <div className="flex justify-between">
                <span>{lang === 'ru' ? 'Доставка:' : lang === 'uz' ? 'Yetkazib berish:' : 'Delivery:'}</span>
                <span>{deliveryFee === 0 ? (lang === 'ru' ? 'Бесплатно' : lang === 'uz' ? 'Bepul' : 'Free') : `${deliveryFee}₽`}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>{lang === 'ru' ? 'Итого:' : lang === 'uz' ? 'Jami:' : 'Total:'}</span>
                <span>{finalTotal}₽</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                {lang === 'ru' ? 'Имя' : lang === 'uz' ? 'Ism' : 'Name'}
              </label>
              <input
                type="text"
                value={orderData.name}
                onChange={(e) => setOrderData({...orderData, name: e.target.value})}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder={lang === 'ru' ? 'Введите ваше имя' : lang === 'uz' ? 'Ismingizni kiriting' : 'Enter your name'}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4" />
                {lang === 'ru' ? 'Телефон' : lang === 'uz' ? 'Telefon' : 'Phone'}
              </label>
              <input
                type="tel"
                value={orderData.phone}
                onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="+998 90 123 45 67"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Address */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4" />
                {lang === 'ru' ? 'Адрес доставки' : lang === 'uz' ? 'Yetkazib berish manzili' : 'Delivery Address'}
              </label>
              <textarea
                value={orderData.address}
                onChange={(e) => setOrderData({...orderData, address: e.target.value})}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                rows="3"
                placeholder={lang === 'ru' ? 'Улица, дом, квартира' : lang === 'uz' ? 'Ko\'cha, uy, xonadon' : 'Street, house, apartment'}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            {/* Payment Method */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <CreditCard className="w-4 h-4" />
                {lang === 'ru' ? 'Способ оплаты' : lang === 'uz' ? 'To\'lov usuli' : 'Payment Method'}
              </label>
              <select
                value={orderData.paymentMethod}
                onChange={(e) => setOrderData({...orderData, paymentMethod: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              >
                {PAYMENT_METHODS.map(method => (
                  <option key={method.value} value={method.value}>
                    {method.label[lang]}
                  </option>
                ))}
              </select>
            </div>

            {/* Delivery Time */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4" />
                {lang === 'ru' ? 'Время доставки' : lang === 'uz' ? 'Yetkazib berish vaqti' : 'Delivery Time'}
              </label>
              <select
                value={orderData.deliveryTime}
                onChange={(e) => setOrderData({...orderData, deliveryTime: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              >
                <option value="asap">
                  {lang === 'ru' ? 'Как можно скорее' : lang === 'uz' ? 'Imkon qadar tezroq' : 'As soon as possible'}
                </option>
                <option value="1hour">
                  {lang === 'ru' ? 'Через 1 час' : lang === 'uz' ? '1 soatdan keyin' : 'In 1 hour'}
                </option>
                <option value="2hours">
                  {lang === 'ru' ? 'Через 2 часа' : lang === 'uz' ? '2 soatdan keyin' : 'In 2 hours'}
                </option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                {lang === 'ru' ? 'Комментарий к заказу' : lang === 'uz' ? 'Buyurtmaga izoh' : 'Order Notes'}
              </label>
              <textarea
                value={orderData.notes}
                onChange={(e) => setOrderData({...orderData, notes: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                rows="2"
                placeholder={lang === 'ru' ? 'Дополнительные пожелания...' : lang === 'uz' ? 'Qo\'shimcha istaklar...' : 'Additional requests...'}
              />
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-800 mb-2">
                <Truck className="w-5 h-5" />
                <span className="font-medium">
                  {lang === 'ru' ? 'Информация о доставке' : lang === 'uz' ? 'Yetkazib berish haqida' : 'Delivery Info'}
                </span>
              </div>
              <p className="text-sm text-blue-700">
                {lang === 'ru' ? `Время доставки: ${DELIVERY_INFO.estimatedTime.min}-${DELIVERY_INFO.estimatedTime.max} минут` :
                 lang === 'uz' ? `Yetkazib berish vaqti: ${DELIVERY_INFO.estimatedTime.min}-${DELIVERY_INFO.estimatedTime.max} daqiqa` :
                 `Delivery time: ${DELIVERY_INFO.estimatedTime.min}-${DELIVERY_INFO.estimatedTime.max} minutes`}
              </p>
              {totalPrice < DELIVERY_INFO.freeDeliveryAmount && (
                <p className="text-sm text-blue-700 mt-1">
                  {lang === 'ru' ? `Бесплатная доставка от ${DELIVERY_INFO.freeDeliveryAmount}₽` :
                   lang === 'uz' ? `${DELIVERY_INFO.freeDeliveryAmount}₽ dan bepul yetkazib berish` :
                   `Free delivery from ${DELIVERY_INFO.freeDeliveryAmount}₽`}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-black font-bold py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  {lang === 'ru' ? 'Оформляем...' : lang === 'uz' ? 'Rasmiylashtirilmoqda...' : 'Processing...'}
                </div>
              ) : (
                `${lang === 'ru' ? 'Оформить заказ' : lang === 'uz' ? 'Buyurtma berish' : 'Place Order'} • ${finalTotal}₽`
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImprovedOrderModal;