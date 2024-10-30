import React from "react";
import Controls from "./Order/Control";
import Table from "./Order/Table";
import OrderSummary from "./Order/MakeOrder";

const RadioAdvertisement = () => {
  return (
    <div className=" min-h-screen p-8 text-white">
      <div className="max-w-[80%] mx-auto">
        {/* Controls */}
        <Controls />

        {/* Main Content: Table and Order Summary */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Table */}
          <div className="flex-1">
            <Table />
          </div>

          {/* Order Summary */}
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default RadioAdvertisement;
