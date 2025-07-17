import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ 
  product, 
  addToCard, 
  toggleFavorite, 
  favoriteItems, 
  lang,
  showNotification 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const isFavorited = favoriteItems.some(item => item.id === product.id);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await addToCard(product);
      showNotification?.('success', 
        lang === 'ru' ? 'Товар добавлен в корзину' :
        lang === 'uz' ? 'Mahsulot savatga qo\'shildi' :
        'Item added to cart'
      );
    } catch (error) {
      showNotification?.('error', 
        lang === 'ru' ? 'Ошибка при добавлении' :
        lang === 'uz' ? 'Qo\'shishda xatolik' :
        'Error adding item'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    showNotification?.(
      isFavorited ? 'info' : 'success',
      isFavorited 
        ? (lang === 'ru' ? 'Удалено из избранного' :
           lang === 'uz' ? 'Sevimlilardan olib tashlandi' :
           'Removed from favorites')
        : (lang === 'ru' ? 'Добавлено в избранное' :
           lang === 'uz' ? 'Sevimlilarga qo\'shildi' :
           'Added to favorites')
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Favorite Button */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-700/70 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-600 transition-all duration-200"
      >
        <Heart 
          className={`w-5 h-5 transition-colors ${
            isFavorited ? 'text-red-500 fill-red-500' : 'text-gray-400 dark:text-gray-300 hover:text-red-500'
          }`} 
        />
      </button>

      {/* New Badge */}
      {product.isNew && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">
          NEW
        </div>
      )}

      {/* Product Image */}
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700">
        <img
          src={product.img}
          alt={product.title?.[lang] || 'Product'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-yellow-600 transition-colors">
          {product.title?.[lang]}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {product.description?.[lang]}
        </p>

        {/* Rating & Time (if available) */}
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{product.rating}</span>
            </div>
          )}
          {product.cookTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{product.cookTime} мин</span>
            </div>
          )}
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              {product.price}₽
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                {product.oldPrice}₽
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <ShoppingCart className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {lang === 'ru' ? 'В корзину' :
               lang === 'uz' ? 'Savatga' :
               'Add to cart'}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
