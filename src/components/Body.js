import { useEffect, useState } from "react";
import RestoCart from "./RestoCart";
import React from "react";
import Shimmer from "./Shimmers";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/OnlineStatus";
const Body = () => {
  const [restaurantlist, setRestaurant] = useState([]);
  const [filterRest, setfilterRest] = useState([]);
  const [searchtext, setSearchtext] = useState(" ");

  const onlinStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    console.log(data);
    setRestaurant(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRest(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (onlinStatus === false) {
    return <h1>You're offline</h1>;
  }

  return restaurantlist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search m-4 p-4">
        <input
          className="border border-solid border-black"
          value={searchtext}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        ></input>
        <button
          className="px-4 py-0.5 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filterList = restaurantlist.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setfilterRest(filterList);
          }}
        >
          Search
        </button>
        <button
          className=" px-10 py-0.5 bg-blue-300 m-4 rounded-lg "
          onClick={() => {
            const filterRest = restaurantlist.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filterRest);
            setfilterRest(filterRest);
          }}
        >
          Top Rated Restaurants
        </button>
        <button>Fast Delivery</button>
        <button>Rs300 - Rs600</button>
        <button>Less than Rs300</button>
      </div>
      <div className=" flex flex-wrap ">
        {filterRest?.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestoCart restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

{
  /* <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant?.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantsCardPromotoed restData={restaurant.info} />
            ) : (
              <RestoCart restData={restaurant.info} />
            )}
          </Link> */
}
