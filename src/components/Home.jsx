import React from "react";
import { pizza } from "../assets/data";
import Swiper from "./Swiper";

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
        <div className="flex flex-wrap items-center justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4">
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
          </div>
          <div className="flex items-center gap-4">
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
          </div>
          <div className="flex items-center gap-4">
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
          </div>
          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
