import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className=" flex p-2">
      <div className="text-4xl font-bold flex-1"></div>
      <ul className="flex gap-2 justify-between items-center  w-96 ">
        <li className="text-xl font-bold cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl font-bold cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="text-xl font-bold cursor-pointer">
          <Link to="/products">Products</Link>
        </li>
        <li className="text-xl font-bold cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;