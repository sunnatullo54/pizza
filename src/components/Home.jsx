import React from "react";
import { pizza } from "../assets/data";
import Swiper from "./Swiper";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";

const Home = ({ lang }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <Swiper />
      
      <StatsSection lang={lang} />
      
      <div className="py-12">
        <h2 className="text-yellov">
          {lang === "ru" && "Новинки"}
          {lang === "uz" && "Yangi elementlar"}
          {lang === "en" && "New items"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={pizza} alt="" className="w-20 object-cover" />
            <div>
              <p className="font-montserrat font-bold text-lg leading-tight">
                {lang === "ru" && "Карбонара"}
                {lang === "uz" && "Karbonara"}
                {lang === "en" && "Carbonara"}
              </p>
              <p className="font-montserrat font-extrabold text-base leading-tight text-[#F7D22D] pt-1">
                {lang === "ru" && "от 120 ₽"}
                {lang === "uz" && "120 ₽ dan"}
                {lang === "en" && "from 120 ₽"}
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={pizza} alt="" className="w-20 object-cover" />
            <div>
              <p className="font-montserrat font-bold text-lg leading-tight">
                {lang === "ru" && "Карбонара"}
                {lang === "uz" && "Karbonara"}
                {lang === "en" && "Carbonara"}
              </p>
              <p className="font-montserrat font-extrabold text-base leading-tight text-[#F7D22D] pt-1">
                {lang === "ru" && "от 120 ₽"}
                {lang === "uz" && "120 ₽ dan"}
                {lang === "en" && "from 120 ₽"}
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={pizza} alt="" className="w-20 object-cover" />
            <div>
              <p className="font-montserrat font-bold text-lg leading-tight">
                {lang === "ru" && "Карбонара"}
                {lang === "uz" && "Karbonara"}
                {lang === "en" && "Carbonara"}
              </p>
              <p className="font-montserrat font-extrabold text-base leading-tight text-[#F7D22D] pt-1">
                {lang === "ru" && "от 120 ₽"}
                {lang === "uz" && "120 ₽ dan"}
                {lang === "en" && "from 120 ₽"}
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={pizza} alt="" className="w-20 object-cover" />
            <div>
              <p className="font-montserrat font-bold text-lg leading-tight">
                {lang === "ru" && "Карбонара"}
                {lang === "uz" && "Karbonara"}
                {lang === "en" && "Carbonara"}
              </p>
              <p className="font-montserrat font-extrabold text-base leading-tight text-[#F7D22D] pt-1">
                {lang === "ru" && "от 120 ₽"}
                {lang === "uz" && "120 ₽ dan"}
                {lang === "en" && "from 120 ₽"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;