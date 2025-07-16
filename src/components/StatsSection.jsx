import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { Users, ShoppingBag, Clock, Star } from 'lucide-react';

const StatsSection = ({ lang }) => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: 15000,
      suffix: '+',
      label: {
        ru: 'Довольных клиентов',
        uz: 'Mamnun mijozlar',
        en: 'Happy customers'
      }
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      number: 50000,
      suffix: '+',
      label: {
        ru: 'Заказов выполнено',
        uz: 'Buyurtmalar bajarildi',
        en: 'Orders completed'
      }
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: 25,
      suffix: ' мин',
      label: {
        ru: 'Среднее время доставки',
        uz: 'O\'rtacha yetkazib berish vaqti',
        en: 'Average delivery time'
      }
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: 4.9,
      suffix: '/5',
      label: {
        ru: 'Рейтинг качества',
        uz: 'Sifat reytingi',
        en: 'Quality rating'
      }
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {lang === 'ru' ? 'Наши достижения' :
           lang === 'uz' ? 'Bizning yutuqlarimiz' :
           'Our achievements'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center text-yellow-500 mb-4">
                {stat.icon}
              </div>
              <div className="mb-2">
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  lang={lang}
                />
              </div>
              <p className="text-gray-600 text-sm">
                {stat.label[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;