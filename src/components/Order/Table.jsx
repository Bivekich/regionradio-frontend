const stations = [
  {
    name: "Радио Energy",
    frequency: "87.8",
    pricePerSecond: "20 рублей",
    totalCost: "200 рублей",
    imageUrl: "/",
  },
];

const Table = () => {
  return (
    <div className="bg-[#242731] p-6 rounded-2xl text-white overflow-auto shadow-2xl">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="p-4">Радиостанция</th>
            <th>Частота вещания</th>
            <th>Стоимость 1 секунды</th>
            <th>Итоговая стоимость</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {stations.map((station, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="flex items-center p-4">
                <img
                  src={station.imageUrl}
                  alt={station.name}
                  className="w-12 h-12 mr-4 rounded"
                />
                {station.name}
              </td>
              <td>{station.frequency}</td>
              <td>{station.pricePerSecond}</td>
              <td>{station.totalCost}</td>
              <td>
                <button className="bg-[#6C5DD3] px-10 py-2 transition rounded-xl text-white hover:bg-[#8e3db8]">
                  В корзину
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
