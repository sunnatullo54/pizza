import logo from "./icon/logo.svg";
import yandexEda from "./icon/yandex-eda.svg";
import star from "./icon/star.svg";
import point from "./icon/point.svg";
import slideOne from "./images/slideOne.png";
import slideTwo from "./images/slideTwo.png";
import pizza from "./icon/pizza.svg";
import image from "./icon/image.svg";
import image2 from "./icon/image2.svg";
import image3 from "./icon/image3.svg";
import image4 from "./icon/image4.svg";
import image5 from "./icon/image5.svg";
import image6 from "./icon/image6.svg";
import group from "./icon/group.svg";
import group2 from "./icon/group2.svg";
import group3 from "./icon/group3.svg";
import group4 from "./icon/group4.svg";
import image7 from "./icon/image 15.svg";
import pizza1 from "./images/pizza1.png";
import pizza2 from "./images/pizza2.png";
import pizza3 from "./images/pizza3.png";
import pizza4 from "./images/pizza4.png";

const pizzaImages = [pizza1, pizza2, pizza3, pizza4]; 

const pizza_data = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 1, 
  img: pizzaImages[index % pizzaImages.length],  
  price: 450,
  count: 1,
  title: {
    ru: 'С креветками и трюфелями',
    en: 'With shrimp and truffles',
    uz: 'Krevetka va trufellar bilan'
  },
  description: {
    ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
    uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
  },
  category: {
    ru: 'Пицца',
    en: 'Pizza',
    uz: 'Pitsa'
  }
}));

export {
  pizza_data,
  logo,
  yandexEda,
  star,
  point,
  slideOne,
  slideTwo,
  pizza,
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  group,
  group2,
  group3,
  group4,
  image7,
};
