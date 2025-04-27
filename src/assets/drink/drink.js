import drink1 from "./drink1.jpeg";
import drink2 from "./drink2.png";
import drink3 from "./drink3.png";
import drink4 from "./drink4.jpg";
import drink5 from "./drink5.jpg";
import drink6 from "./drink6.png";

const deinkImages = [ drink1, drink2, drink3, drink4, drink5, drink6 ]

const drink_data = Array.from({ length: 6 }).map((_, index) => ({
  id: index + 29,
  img: deinkImages[index],
  price: 350,
  count: 1,
  title: {
    ru: "Дарим кибер-призы",
    en: "With shrimp and truffles",
    uz: "Krevetka va trufellar bilan",
  },
  description: {
    ru: "Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.",
    en: "Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g",
    uz: "Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g",
  },
  category: {
    ru: "напиток",
    en: "drink",
    uz: "ichimlik",
  },
}));

export { drink_data };
