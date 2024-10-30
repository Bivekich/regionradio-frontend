import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-10 z-[3] w-[80%] mx-auto mb-5">
      <div className="flex justify-between h-[100px] items-center text-[25px] font-light">
        <h1 className="nav-link">Реклама на радио</h1>
        <h1 className="nav-link">Аудиоролики</h1>
        <h1 className="nav-link">Рейтинги</h1>
        <h1 className="nav-link">Контакты</h1>
        <div className="relative">
          <select className="nav-link bg-transparent cursor-pointer appearance-none pr-8">
            <option value="" className="bg-[#1f2128] text-white">Ваш город</option>
            <option value="moscow" className="bg-[#1f2128] text-white">Москва</option>
            <option value="spb" className="bg-[#1f2128] text-white">Санкт-Петербург</option>
            <option value="ekb" className="bg-[#1f2128] text-white">Екатеринбург</option>
            <option value="nsk" className="bg-[#1f2128] text-white">Новосибирск</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg 
              className="w-4 h-4 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        <div>
          <p>8 800 222-01-91</p>
          <p>info@regionradio.ru </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
