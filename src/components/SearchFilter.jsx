import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const SearchFilter = ({ onSearch, onFilter, categories, lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    onFilter({ category, priceRange });
  };

  const handlePriceFilter = (range) => {
    setPriceRange(range);
    onFilter({ category: selectedCategory, priceRange: range });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={
              lang === 'ru' ? 'Поиск блюд...' :
              lang === 'uz' ? 'Taomlarni qidirish...' :
              'Search dishes...'
            }
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">
              {lang === 'ru' ? 'Все категории' :
               lang === 'uz' ? 'Barcha kategoriyalar' :
               'All categories'}
            </option>
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label[lang]}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {lang === 'ru' ? 'Цена:' :
             lang === 'uz' ? 'Narx:' :
             'Price:'}
          </span>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange.max}
            onChange={(e) => handlePriceFilter({ ...priceRange, max: parseInt(e.target.value) })}
            className="w-20"
          />
          <span className="text-sm font-semibold">{priceRange.max}₽</span>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;