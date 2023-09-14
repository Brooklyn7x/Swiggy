import React, { useState } from "react";
import Itemlist from "./Itemlist";
const RestCategory = ({ data }) => {
  const [showitem, setshowitem] = useState(false);
  const handleClick = () => {
    setshowitem(!showitem);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-sky-200 shadow-lg p-4 rounded-sm   shadow-xl">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showitem && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestCategory;
