import React from "react";
import { drink_data } from '../assets/drink/drink';
import ProductCard from "../components/ProductCard";
import SearchAndFilter from "../components/SearchAndFilter";
import { useSearch } from "../hooks/useSearch";

const drink = ({ addToCard, toggleFavorite, favoriteItems, lang, showNotification }) => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredData
  } = useSearch(drink_data, lang);

  return (
    <div className="container">
      <h1 className="text-yellov">{drink_data[0]?.category?.[lang]}</h1>
      
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        lang={lang}
      />

      {filteredData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {lang === 'ru' ? 'Товары не найдены' :
             lang === 'uz' ? 'Mahsulotlar topilmadi' :
             'No products found'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((drink) => (
            <ProductCard
              key={drink.id}
              product={drink}
              addToCard={addToCard}
              toggleFavorite={toggleFavorite}
              favoriteItems={favoriteItems}
              lang={lang}
              showNotification={showNotification}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default drink;