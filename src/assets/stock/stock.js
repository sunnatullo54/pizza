import stock1 from './stock1.png';
import stock2 from './stock2.png';
import stock3 from './stock3.png';
import stock4 from './stock4.png';
import stock5 from './stock5.png';
import stock6 from './stock6.png';
import stock7 from './stock7.png';
import stock8 from './stock8.png';
import stock9 from './stock9.png';
import stock10 from './stock10.png';
import stock11 from './stock11.png';

const stockImages = [ stock1, stock2, stock3, stock4, stock5, stock6, stock7, stock8, stock9, stock10, stock11 ]

const stock_data = Array.from({ length: 11 }).map((_, index) => ({
  id: index + 35,
  img: stockImages[index],
  price: 350,
  count: 1,
  title: {
    ru: "Дарим кибер-призы",
    uz: "Biz kiber sovg’alar beramiz",
    en: "We Give Cyber Prizes",
  },
  description: {
    ru: "Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.",
    uz: "Qanday muvaffaqiyat! Kiber-komboni buyurtma qiling va MY.GAMES o‘yinlariga kirish huquqini qo‘lga kiriting, shuningdek, Bite’dan kokos batonchasi va “Cyber” shokoladli pechene. 29-iyun kuni o‘yin kalitlari va katta pitsalar yutug‘i uchun avtomatik ishtirokchi bo‘ling.",
    en: "What an achievement! Order the Cyber Combo and get access to games from MY.GAMES, plus a coconut bar and Cyber chocolate cookie from Bite. Also, automatically become a participant in the draw for game keys and large pizzas on June 29.",
  },
  category: {
    ru: "Посмотреть",
    uz: "Qarang",
    en: "View",
  },
}));

export { stock_data }
