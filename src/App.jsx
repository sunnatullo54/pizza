import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useNotification } from "./hooks/useNotification";
import { useDarkMode } from "./hooks/useDarkMode";
import NotificationContainer from "./components/NotificationContainer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingQuickOrder from "./components/FloatingQuickOrder";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pizza from "./page/Pizza";
import Pasta from "./page/Pasta";
import Soups from "./page/Soups";
import Salads from "./page/Salads";
import Drinks from "./page/Drinks";
import Stock from "./page/Stock";
import Contacts from "./page/Contacts";
import Footer from "./components/Footer";
import Card from "./page/Card";
import Favorite from "./page/Favorite";
import { STORAGE_KEYS } from "./utils/constants";

function App() {
  const [lang, setLang] = useState("ru");
  const [cart, setCartItems] = useLocalStorage(STORAGE_KEYS.CART, []);
  const [favorite, setFavoriteItems] = useLocalStorage(STORAGE_KEYS.FAVORITES, []);
  const { notifications, addNotification, removeNotification } = useNotification();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const remove = (id) => {
    setCartItems(cart.filter(item => item.id !== id));
    addNotification('info', 
      lang === 'ru' ? 'Товар удален из корзины' :
      lang === 'uz' ? 'Mahsulot savatdan olib tashlandi' :
      'Item removed from cart'
    );
  };  

  const toggleFavorite = (item) => {
    const isFavorited = favorite.some(fav => fav.id === item.id);
    if (isFavorited) {
      setFavoriteItems(favorite.filter(fav => fav.id !== item.id));
    } else {
      setFavoriteItems([...favorite, item]);
    }
  };  

  const removeFromFavorite = (id) => {
    setFavoriteItems(favorite.filter(item => item.id !== id));
    addNotification('info', 
      lang === 'ru' ? 'Удалено из избранного' :
      lang === 'uz' ? 'Sevimlilardan olib tashlandi' :
      'Removed from favorites'
    );
  };

  const addToCard = (item) => {
    const found = cart.some((i) => i.id === item.id);
    if (!found) {
      setCartItems([...cart, { ...item, count: 1 }]);
      addNotification('success', 
        lang === 'ru' ? 'Товар добавлен в корзину' :
        lang === 'uz' ? 'Mahsulot savatga qo\'shildi' :
        'Item added to cart'
      );
    } else {
      addNotification('warning',
        lang === 'ru' ? 'Товар уже в корзине' :
        lang === 'uz' ? 'Mahsulot allaqachon savatda' :
        'Item already in cart'
      );
    }
  };

  const increaseCount = (id) => {
    setCartItems(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id) => {
    setCartItems(
      cart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <NotificationContainer 
        notifications={notifications}
        removeNotification={removeNotification}
      />
      <ScrollToTop />
      <FloatingQuickOrder lang={lang} />
      
      <Navbar 
        cartItems={cart} 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/Pizza" element={
            <Pizza 
              addToCard={addToCard} 
              lang={lang} 
              favoriteItems={favorite} 
              toggleFavorite={toggleFavorite} 
              showNotification={addNotification}
            />
          }/>
          <Route path="/Paste" element={
            <Pasta 
              addToCard={addToCard} 
              lang={lang} 
              favoriteItems={favorite} 
              toggleFavorite={toggleFavorite} 
              showNotification={addNotification}
            />
          }/>
          <Route path="/Soups" element={
            <Soups 
              addToCard={addToCard} 
              lang={lang} 
              favoriteItems={favorite} 
              toggleFavorite={toggleFavorite} 
              showNotification={addNotification}
            />
          }/>
          <Route path="/Salads" element={
            <Salads 
              addToCard={addToCard} 
              lang={lang} 
              favoriteItems={favorite} 
              toggleFavorite={toggleFavorite} 
              showNotification={addNotification}
            />
          }/>
          <Route path="/Drinks" element={
            <Drinks 
              addToCard={addToCard} 
              lang={lang} 
              favoriteItems={favorite} 
              toggleFavorite={toggleFavorite} 
              showNotification={addNotification}
            />
          } />
          <Route path="/Stock" element={<Stock lang={lang} />}/>
          <Route path="/Contacts" element={<Contacts lang={lang} />}/>
          <Route path="/Card" element={
            <Card 
              cardItems={cart} 
              increaseCount={increaseCount} 
              decreaseCount={decreaseCount} 
              lang={lang} 
              remove={remove} 
              showNotification={addNotification}
            />
          }/>
          <Route path="/Favorite" element={
            <Favorite 
              favoriteItems={favorite} 
              addToCard={addToCard} 
              removeFromFavorite={removeFromFavorite} 
              lang={lang}
            />
          }/>
        </Routes>
      </main>
      
      <Footer lang={lang} />
    </div>
  );
}

export default App;