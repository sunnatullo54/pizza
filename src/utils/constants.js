// Loyiha konstantalari
export const STORAGE_KEYS = {
  CART: 'pizza_cart',
  FAVORITES: 'pizza_favorites',
  LANGUAGE: 'pizza_language',
  USER_PREFERENCES: 'pizza_user_preferences'
};

export const CATEGORIES = [
  { value: 'pizza', label: { ru: 'Пицца', uz: 'Pitsa', en: 'Pizza' } },
  { value: 'pasta', label: { ru: 'Паста', uz: 'Makaron', en: 'Pasta' } },
  { value: 'soups', label: { ru: 'Супы', uz: 'Sho\'rvalar', en: 'Soups' } },
  { value: 'salads', label: { ru: 'Салаты', uz: 'Salatlar', en: 'Salads' } },
  { value: 'drinks', label: { ru: 'Напитки', uz: 'Ichimliklar', en: 'Drinks' } }
];

export const DELIVERY_INFO = {
  minOrderAmount: 500,
  deliveryFee: 150,
  freeDeliveryAmount: 1000,
  estimatedTime: { min: 25, max: 45 }
};

export const PAYMENT_METHODS = [
  { value: 'cash', label: { ru: 'Наличными', uz: 'Naqd pul', en: 'Cash' } },
  { value: 'card', label: { ru: 'Картой', uz: 'Karta orqali', en: 'Card' } },
  { value: 'online', label: { ru: 'Онлайн', uz: 'Onlayn', en: 'Online' } }
];