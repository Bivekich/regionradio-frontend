import logo from "../assets/images/logo.svg";
import girl from "../assets/images/girl.svg";

const PromoBanner = () => {
  return (
    <div className="flex items-center justify-center  min-h-[80vh] p-8">
      <div className="flex flex-col md:flex-row items-center max-w-[80%] mx-auto">
        <div className="text-center md:text-left max-w-2xl z-[2]">
          <img src={logo} alt="logo" className="" />

          {/* Description */}
          <div className="mt-8 text-white text-lg">
            <p>Реклама на радио в Санкт-Петербург</p>
            <p className="mt-4 text-sm max-w-xl leading-relaxed">
              Вы можете громко заявить о своей компании на любой радиостанции в
              г. Санкт-Петербург, о вас услышат более трёх миллионов человек. Мы
              оперативно составим медиаплан с самым выгодным размещением.
            </p>
          </div>

          {/* Button */}
          <button className="mt-8 bg-[#6C5DD3] text-white  px-14 py-3 rounded-2xl text-2xl font-light hover:bg-[#8e3db8] transition-colors duration-300">
            Заказать звонок
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center mt-8 md:mt-0 z-[-1] right-0">
          <img src={girl} alt="girl" className=" top-0 mt-[-100px]" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
