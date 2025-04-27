import pasta1 from './pasta1.png';
import pasta2 from './pasta2.png';
import pasta3 from './pasta3.png';
import pasta4 from './pasta4.png';
import pasta5 from './pasta4.png';
import pasta6 from './pasta4.png';
import pasta7 from './pasta4.png';
import pasta8 from './pasta4.png';

const pastaImages = [pasta1, pasta2, pasta3, pasta4, pasta5, pasta6, pasta7, pasta8];  

const pasta_data = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 9,  
  img: pastaImages[index],
  title: {
    ru: 'С креветками и трюфелями',
    en: 'With shrimp and truffles',
    uz: 'Krevetka va trufellar bilan'
  },
  description: {
    ru: 'Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
    uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
  },
  price: 350,
  count: 1,
  category: {
    ru: 'Паста',
    en: 'Pasta',
    uz: 'Pasta'
  }
}));

export { pasta_data, pasta1, pasta2, pasta3, pasta4, pasta5, pasta6, pasta7, pasta8,}