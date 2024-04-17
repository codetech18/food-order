import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className=" nav flex h-16 items-center sticky right-0 left-0 bg-white shadow-lg">
        <a href="/">
          {/* <img className="w-24 cursor-pointer m-7" src={logo} alt="Logo" /> */}
          <h1 className="w-24 text-3xl italic font-semibold cursor-pointer m-7">
            FOODco.
          </h1>
        </a>
        <ul className="list-none ">
          <li className="inline-block my-0 mx-4 ">
            <a className="text-black font-medium text-base" href="#Home">
              Home
            </a>
          </li>
          <li className="inline-block my-0 mx-4">
            <a href="#About">Deals</a>
          </li>
          <li className="inline-block my-0 mx-0">
            <a href="#Menu">Menu</a>
          </li>

          <li className="inline-block my-0 mx-4">
            <a href="#Review">Review</a>
          </li>
          <li className="inline-block my-0 mx-4">
            <a href="#Order">Order</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
