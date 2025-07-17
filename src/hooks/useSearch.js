import { useState, useMemo } from 'react';

export const useSearch = (data, lang) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('name');

  const filteredData = useMemo(() => {
    const safeLang = ['uz', 'ru', 'en'].includes(lang) ? lang : 'en';
    let filtered = data;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item?.title?.[safeLang]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item?.description?.[safeLang]?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item =>
        item?.category?.[safeLang]?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Price filter
    filtered = filtered.filter(item =>
      item?.price >= priceRange.min && item?.price <= priceRange.max
    );

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return (a?.title?.[safeLang] || '').localeCompare(b?.title?.[safeLang] || '');
      }
    });

    return filtered;
  }, [data, searchTerm, selectedCategory, priceRange, sortBy, lang]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredData
  };
};
