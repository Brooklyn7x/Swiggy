import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/OnlineStatus";
import img from "../image/2.png";

const Header = () => {
  const OnlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-sky-200 shadow-xl mb-2 h-16">
      <div className="navbar_container">
        {/* <img className=" h-28 px-2  rounded-lg" src={img} alt="Logo" /> */}
        <div
          style={{ fontSize: "3rem" }}
          className=" h-16 w-20 text-center px-5 font "
        >
          🌮
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">OnlineStatus : {OnlineStatus ? "🟢" : "🚫"}</li>
          <li className="px-4">
            <a href="/"> Home</a>
          </li>
          <li className="px-4">
            <a href="/about"> About</a>
          </li>
          <li className="px-4">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
