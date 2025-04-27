import React from "react";
import { pizza } from "../assets/data";
import Swiper from "./Swiper"


const Home = ({ lang }) => {
  
  return (
    <div className="container">
      <Swiper />
      <div className="">
        <h2 className="text-yellov">
          {lang === "ru" && "Новинки"}
          {lang === "uz" && "Yangi elementlar"}
          {lang === "en" && "New items"}
        </h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-[25px]">
            <img src={pizza} alt="" />
            <div className="">
              <p className="font-montserrat font-bold text-[18px] leading-[100%]">
                {lang === "ru" && "Карбонара"}
                {lang === "uz" && "Karbonara"}
                {lang === "en" && "Carbonara"}
              </p>
              <p className="font-montserrat font-extrabold text-[16px] leading-[100%] text-[#F7D22D]">
              {  lang === "ru" && "от 120 ₽"}
                {lang === "uz" && "120 ₽ dan"}
                {lang === "en" && "from 120 ₽"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={pizza} alt="" />
            <div className="">
              <p className="font-montserrat font-bold text-[18px] leading-[100%]">
                {lang === "ru" && "Карбонара"}
                {lang === "uz" && "Karbonara"}
                {lang === "en" && "Carbonara"}
              </p>
              <p className="font-montserrat font-extrabold text-[16px] leading-[100%] text-[#F7D22D]">
                {lang === "ru" && "от 120 ₽"}
                {lang === "uz" && "120 ₽ dan"}
                {lang === "en" && "from 120 ₽"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={pizza} alt="" />
            <div className="">
              <p className="font-montserrat font-bold text-[18px] leading-[100%]">
                {lang === "ru" && "Карбонара"}
                {lang === "uz" && "Karbonara"}
                {lang === "en" && "Carbonara"}
              </p>
              <p className="font-montserrat font-extrabold text-[16px] leading-[100%] text-[#F7D22D]">
                {lang === "ru" && "от 120 ₽"}
                {lang === "uz" && "120 ₽ dan"}
                {lang === "en" && "from 120 ₽"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[25px]">
            <img src={pizza} alt="" />
            <div className="">
              <p className="font-montserrat font-bold text-[18px] leading-[100%]">
                {lang === "ru" && "Карбонара"}
                {lang === "uz" && "Karbonara"}
                {lang === "en" && "Carbonara"}
              </p>
              <p className="font-montserrat font-extrabold text-[16px] leading-[100%] text-[#F7D22D]">
                {lang === "ru" && "от 120 ₽"}
                {lang === "uz" && "120 ₽ dan"}
                {lang === "en" && "from 120 ₽"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
