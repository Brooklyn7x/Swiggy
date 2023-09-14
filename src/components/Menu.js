import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import RestCategory from "./RestCategory";

const Menu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run fetchData once on mount

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction="
    );
    const json = await res.json();
    console.log(json);
    setMenuData(json.data); // Update menuData with fetched data
  };

  const category =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(category);

  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards?.card?.info || {};

  const { name, cuisines, locality, costForTwoMessage } =
    menuData?.cards[0]?.card?.card?.info || {};

  return menuData === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold font-serif text-xl my-6">{name}</h1>
      <p className="font-bold">
        {cuisines.join(" , ")} {"⚔️"} {costForTwoMessage}
      </p>
      {category.map((cat, key) => (
        <RestCategory key={cat?.card?.card.title} data={cat?.card?.card} />
      ))}
    </div>
  );
};

export default Menu;
