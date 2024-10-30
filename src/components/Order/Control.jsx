const Controls = () => {
  return (
    <div className="b p-6 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        {/* Control 1 */}
        <div>
          <label className="block text-sm mb-2">Хронометраж ролика (сек)</label>
          <input
            type="range"
            min="5"
            max="60"
            defaultValue="10"
            className="w-full"
          />
          <div className="text-center mt-2">10</div>
        </div>

        {/* Control 2 */}
        <div>
          <label className="block text-sm mb-2">
            Количество трансляций в день
          </label>
          <input
            type="range"
            min="1"
            max="20"
            defaultValue="10"
            className="w-full"
          />
          <div className="text-center mt-2">10</div>
        </div>

        {/* Control 3 */}
        <div>
          <label className="block text-sm mb-2">Хронометраж ролика (сек)</label>
          <input
            type="range"
            min="5"
            max="60"
            defaultValue="10"
            className="w-full"
          />
          <div className="text-center mt-2">10</div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
