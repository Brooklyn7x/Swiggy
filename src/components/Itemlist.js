import React from "react";

const Itemlist = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-white text-left flex"
        >
         
          <div className="w-9/12">
            <div className="py-2">
              <span> {item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p>{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              className="rounded-lg"
            ></img>
          </div>
        </div>

      ))}
    </div>
  );
};

export default Itemlist;
