import React from "react";
import {
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  group2,
  group3,
  group4,
  logo,
} from "../assets/data";

const Footer = ({ lang }) => {
  return (
    <footer className="">
      <div className="container py-20 grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          <div className="flex items-center justify-between">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <div className="space-y-1 block md:hidden text-end">
              <a
                className="text-lg font-bold text-yellow-500 block"
                href="tel:+998939170731"
              >
                998 93-917-07-31
              </a>
              <button className="light-btn bg-yellow-400 py-2 px-4 rounded-md font-semibold">
                {lang === "ru" && "Заказать звонок"}
                {lang === "uz" && "Qo'ng'iroqni talab qiling"}
                {lang === "en" && "Request a call"}
              </button>
            </div>
          </div>

          <div className="font-bold flex flex-col md:flex-row md:space-x-10 text-xs md:text-base">
            <p>
              {lang === "ru" && "Калорийность и состав"}
              {lang === "uz" && "Kaloriya tarkibi va tarkibi"}
              {lang === "en" && "Caloric content and composition"}
            </p>
            <p>
              {lang === "ru" && "Правовая информация"}
              {lang === "uz" && "Yuridik ma'lumotlar"}
              {lang === "en" && "Legal information"}
            </p>
          </div>

          <p className="font-bold text-xs md:text-base">
            {lang === "ru" && "Мы в соцсетях"}
            {lang === "uz" && "Biz ijtimoiy tarmoqlardamiz"}
            {lang === "en" && "We are on social networks"}
          </p>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-xs md:text-sm">
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Москва ул. Проспект</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">ВКонтакте</a>
            </li>
            <li>
              <a href="#">Вернадского 86В</a>
            </li>
          </ul>

          <div className="hidden md:flex justify-between items-center pt-6">
            <p className="text-sm">
              {lang === "ru" && "YaBao Все права защищены © 2021"}
              {lang === "uz" && "YaBao Barcha huquqlar himoyalangan © 2021"}
              {lang === "en" && "YaBao All rights reserved © 2021"}
            </p>
            <ul className="flex space-x-4">
              <li>
                <a href="#">
                  <img src={group3} alt="visa" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={group4} alt="visa" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={group2} alt="visa" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6 lg:col-span-2">
          <p className="font-bold text-sm md:text-base">
            {lang === "ru" && "Остались вопросы? А мы всегда на связи:"}
            {lang === "uz" && "Savollar qoldimi? Va biz doimo aloqadamiz:"}
            {lang === "en" && "Any questions left? We are always in touch:"}
          </p>

          <ul className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <li className="border rounded-md flex justify-center p-2">
              <a href="#">
                <img src={image} alt="icon" className="w-8" />
              </a>
            </li>
            <li className="border rounded-md flex justify-center p-2">
              <a href="#">
                <img src={image2} alt="icon" className="w-8" />
              </a>
            </li>
            <li className="border rounded-md flex justify-center p-2">
              <a href="#">
                <img src={image3} alt="icon" className="w-8" />
              </a>
            </li>
            <li className="border rounded-md flex justify-center p-2">
              <a href="#">
                <img src={image4} alt="icon" className="w-8" />
              </a>
            </li>
            <li className="border rounded-md flex justify-center p-2">
              <a href="#">
                <img src={image5} alt="icon" className="w-8" />
              </a>
            </li>
            <li className="border rounded-md flex justify-center p-2">
              <a href="#">
                <img src={image6} alt="icon" className="w-8" />
              </a>
            </li>
            <li className="col-span-3 md:col-span-6">
              <button className="w-full bg-yellow-400 py-2 rounded-md font-bold">
                {lang === "ru" && "Написать нам"}
                {lang === "uz" && "Bizga yozing"}
                {lang === "en" && "Write to us"}
              </button>
            </li>
          </ul>
          <div className="hidden md:block space-y-4">
            <a
              className="text-yellow-500 text-lg font-bold block"
              href="tel:+84993918449"
            >
              8 499 391-84-49
            </a>
            <button className="button bg-yellow-400 py-2 px-6 rounded-md text-black font-bold">
              {lang === "ru" && "Заказать звонок"}
              {lang === "uz" && "Qo'ng'iroqni talab qiling"}
              {lang === "en" && "Request a call"}

            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
