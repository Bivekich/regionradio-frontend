import React from "react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className=" py-6 px-8 text-white flex items-center justify-between w-[80%] mx-auto">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Region Radio Logo" className="h-[50px]" />{" "}
      </div>

      {/* Center Section: Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-sm ">
        <a
          href="#"
          className="hover:text-[#A34ED7] transition-all duration-200"
        >
          Реклама на радио
        </a>
        <a
          href="#"
          className="hover:text-[#A34ED7] transition-all duration-200"
        >
          Аудиоролики
        </a>
        <a
          href="#"
          className="hover:text-[#A34ED7] transition-all duration-200"
        >
          Рейтинги
        </a>
        <a
          href="#"
          className="hover:text-[#A34ED7] transition-all duration-200"
        >
          Контакты
        </a>
        <a
          href="#"
          className="hover:text-[#A34ED7] transition-all duration-200"
        >
          Ваш город
        </a>
      </nav>

      {/* Right Section: Button and Contact Information */}
      <div className="flex items-center space-x-6">
        <button className=" bg-[#6C5DD3] text-white px-6 py-2 rounded-xl text-lg font-light hover:bg-[#8e3db8] transition-colors duration-300">
          Заказать звонок
        </button>
        <div className="text-sm text-righ flex flex-col gap-3">
          <p className="text-right">8 800 222-01-91</p>
          <p>info@regionradio.ru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
