import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pizza from "./page/Pizza";
import Pasta from "./page/Pasta";
import Soups from "./page/Soups";
import Salads from "./page/Salads";
import Drinks from "./page/Drinks";
import Stock from "./page/Stock";
import Contacts from "./page/Contacts";
import Footer from "./components/footer";
import CardPage from "./page/Card";

function App() {
  const [lang, setLang] = useState("ru");
  const [cartItems, setCartItems] = useState([]);

  const addToCard = (item) => {
    const found = cartItems.some((i) => i.id == item.id);
    if (!found) {
      setCartItems([...cartItems, item]);
    } else {
      alert("qoshilgan");
    }
  };

  const increaseCount = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decreaseCount = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    ));
  };

  return (
    <>
      <Navbar cartItems={cartItems} lang={lang} setLang={setLang} />
      <main>
        <Routes>
          <Route exast path="/" element={<Home lang={lang} setLang={setLang}/>} />
          <Route exast path="/Pizza" element={<Pizza addToCard={addToCard} lang={lang} setLang={setLang}/>}/>
          <Route exast path="/Paste" element={<Pasta addToCard={addToCard} lang={lang} setLang={setLang}/>}/>
          <Route exast path="/Soups" element={<Soups addToCard={addToCard} lang={lang} setLang={setLang}/>} />
          <Route exast path="/Salads" element={<Salads addToCard={addToCard} lang={lang} setLang={setLang}/>}/>
          <Route exast path="/Drinks" element={<Drinks addToCard={addToCard} lang={lang} setLang={setLang}/>} />
          <Route exast path="/Stock" element={<Stock lang={lang} setLang={setLang}/>} />
          <Route exast path="/Contacts" element={<Contacts lang={lang} setLang={setLang}/>} />
          <Route path="/Card" element={<CardPage cardItems={cartItems} increaseCount={increaseCount} decreaseCount={decreaseCount} lang={lang} setLang={setLang}/>} />
        </Routes>
      </main>
      <Footer lang={lang} setLang={setLang}/>
    </>
  );
}

export default App;
