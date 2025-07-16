import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, lang }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category, index) => (
        <motion.button
          key={category.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onCategoryChange(category.value)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            selectedCategory === category.value
              ? 'bg-yellow-400 text-black shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.label[lang]}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;