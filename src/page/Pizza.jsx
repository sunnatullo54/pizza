import React from "react";
import { pizza_data } from "../assets/data";
import ProductCard from "../components/ProductCard";
import SearchAndFilter from "../components/SearchAndFilter";
import { useSearch } from "../hooks/useSearch";
import "../index.css";

const Pizza = ({ addToCard, toggleFavorite, favoriteItems, lang, showNotification }) => {
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
  } = useSearch(pizza_data, lang);

  return (
    <div className="container">
      <h1 className="text-yellov">{pizza_data[0]?.category?.[lang]}</h1>
      
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
          {filteredData.map((pizza) => (
            <ProductCard
              key={pizza.id}
              product={pizza}
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

export default Pizza;
        ))}
      </div>
    </div>
  );
};

export default Pizza;
