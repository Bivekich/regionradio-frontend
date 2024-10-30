const OrderSummary = () => {
  return (
    <div className="bg-[#242731] p-6 rounded-2xl text-white w-full md:w-[400px] shadow-2xl">
      <h3 className="text-xl mb-4">Получить медиаплан:</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full p-3 rounded bg-[#1F2128] text-white"
        />
        <input
          type="tel"
          placeholder="Телефон"
          className="w-full p-3 rounded bg-[#1F2128] text-white"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 rounded bg-[#1F2128] text-white"
        />

        <div className="mt-4">
          <h4 className="text-lg mb-2">Выбранные радиостанции:</h4>

          <div className="flex items-center space-x-4">
            <img src="/" alt="Selected Station" className="w-12 h-12 rounded" />
          </div>
        </div>

        <div className="text-lg mt-4">
          Итоговая стоимость:{" "}
          <span className="text-2xl font-semibold">2,000 рублей</span>
        </div>

        <div className="mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox bg-[#1b1b1b]" />
            <span className="ml-2 text-sm">
              Согласие на обработку персональных данных
            </span>
          </label>
        </div>

        <button className="bg-[#6C5DD3] w-full py-3 rounded-xl text-white hover:bg-[#8e3db8] mt-6">
          Заказать
        </button>
      </form>
    </div>
  );
};

export default OrderSummary;
