import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Notification from "./components/Notification";
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

function App() {
  const [lang, setLang] = useState("ru");
  const [cart, setCartItems] = useLocalStorage("cart", []);
  const [favorite, setFavoriteItems] = useLocalStorage("favorites", []);
  const [notification, setNotification] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  const remove = (id) => {
    setCartItems(cart.filter(item => item.id !== id));
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
  };

  const addToCard = (item) => {
    const found = cart.some((i) => i.id === item.id);
    if (!found) {
      setCartItems([...cart, { ...item, count: 1 }]);
      showNotification('success', 
        lang === 'ru' ? 'Товар добавлен в корзину' :
        lang === 'uz' ? 'Mahsulot savatga qo\'shildi' :
        'Item added to cart'
      );
    } else {
      showNotification('warning',
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
    setFavoriteItems(
      favorite.map((item) =>
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
    setFavoriteItems(
      favorite.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      <Navbar cartItems={cart} lang={lang} setLang={setLang} />
      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
          <Route path="/Pizza" element={<Pizza addToCard={addToCard} lang={lang} favoriteItems={favorite} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/Paste" element={<Pasta addToCard={addToCard} lang={lang} favoriteItems={favorite} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/Soups" element={<Soups addToCard={addToCard} lang={lang} favoriteItems={favorite} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/Salads" element={<Salads addToCard={addToCard} lang={lang} favoriteItems={favorite} toggleFavorite={toggleFavorite}/>}/>
          <Route path="/Drinks" element={<Drinks addToCard={addToCard} lang={lang} favoriteItems={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/Stock" element={<Stock lang={lang} setLang={setLang} />}/>
          <Route path="/Contacts" element={<Contacts lang={lang} setLang={setLang} />}/>
          <Route path="/Card" element={<Card cardItems={cart} increaseCount={increaseCount} decreaseCount={decreaseCount} lang={lang} setLang={setLang} remove={remove}/>}/>
          <Route path="/Favorite" element={<Favorite favoriteItems={favorite} addToCard={addToCard} removeFromFavorite={removeFromFavorite} lang={lang}/>}/>
        </Routes>
      </main>
      <Footer lang={lang} setLang={setLang} />
    </>
  );
}

export default App;
