import soups1 from "./soups1.png";
import soups2 from "./soups2.png";
import soups3 from "./soups3.png";
import soups4 from "./soups4.png";

const soupsImages = [ soups1, soups2, soups3, soups4 ]

const soups_data = Array.from({ length: 4 }).map((_, index) => ({
  id: index + 17,
  img: soupsImages[index],
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
    ru: "Супы",
    en: "Soups",
    uz: "sho'rvalar",
  },
}));

export { soups_data, soups1, soups2, soups3, soups4 };
