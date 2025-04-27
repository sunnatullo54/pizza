import salad1 from "./salat1.png";
import salad2 from "./salat2.jpeg";
import salad3 from "./salat3.jpeg";
import salad4 from "./salat4.jpeg";
import salad5 from "./salat5.jpeg";
import salad6 from "./salat6.png";
import salad7 from "./salat7.png";
import salad8 from "./salat8.png";

const saladImages = [ salad1, salad2, salad3, salad4, salad5, salad6, salad7, salad8 ];

const salad_data = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 21,
  img: saladImages[index],
  price: 445,
  count: 1,
  title: {
    ru: "Дарим кибер-призы",
    en: "Giving away cyber prizes",
    uz: "Biz kibersovg'alarni topshiramiz",
  },
  description: {
    ru: "Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.",
    en: 'What an achievement! Order the Cyber ​​Combo and get access to games from MY.GAMES, as well as a coconut bar and chocolate cookie "Cyber" from Bite. And also become an automatic participant in the drawing of game keys and large pizzas on June 29.',
    uz: "Qanday yutuq! Cyber ​​​​Combo-ga buyurtma bering va MY.GAMES-dan o'yinlarga, shuningdek, Bite-dan kokos bariga va Cyber ​​​​shokolad chipli pechenelariga ruxsat oling. Shuningdek, 29-iyun kuni oʻyin kalitlari va yirik pitssalar oʻyinining avtomatik ishtirokchisiga aylaning.",
  },
  category: {
    ru: "салат",
    en: "salad",
    uz: "salat",
  },
}));

export {
  salad_data,
  salad1,
  salad2,
  salad3,
  salad4,
  salad5,
  salad6,
  salad7,
  salad8,
};
