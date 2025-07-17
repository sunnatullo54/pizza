import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { CATEGORIES } from '../utils/constants';

const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  lang
}) => {
  return (
    <div className="bg-white dark:bg-[#1A1F29] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder={
              lang === 'ru' ? 'Поиск блюд...' :
              lang === 'uz' ? 'Taomlarni qidirish...' :
              'Search dishes...'
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#2A303C] text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#2A303C] text-black dark:text-white focus:ring-2 focus:ring-yellow-500 appearance-none transition-all"
          >
            <option value="all">
              {lang === 'ru' ? 'Все категории' :
               lang === 'uz' ? 'Barcha kategoriyalar' :
               'All categories'}
            </option>
            {CATEGORIES.map(category => (
              <option key={category.value} value={category.value}>
                {category.label[lang]}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <SlidersHorizontal className="w-4 h-4" />
            {lang === 'ru' ? 'Цена до:' :
             lang === 'uz' ? 'Narx:' :
             'Price up to:'} {priceRange.max}₽
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Sort */}
        <div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#2A303C] text-black dark:text-white focus:ring-2 focus:ring-yellow-500 transition-all"
          >
            <option value="name">
              {lang === 'ru' ? 'По названию' :
               lang === 'uz' ? 'Nom bo\'yicha' :
               'By name'}
            </option>
            <option value="price-low">
              {lang === 'ru' ? 'Цена: по возрастанию' :
               lang === 'uz' ? 'Narx: arzondan qimmatge' :
               'Price: low to high'}
            </option>
            <option value="price-high">
              {lang === 'ru' ? 'Цена: по убыванию' :
               lang === 'uz' ? 'Narx: qimmatdan arzonga' :
               'Price: high to low'}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
