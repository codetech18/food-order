import React from "react";
import "./Hero.css";
// import burger from "../../assets/image/main_img.png";
// import pg from "../../assets/image/pg.png;
import pg from "../../assets/image/pg.png";
import chef from "../../assets/image/chef.png";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="main flex justify-between relative top-6">
        <div className="main-text relative top-36 left-20">
          <h1 className="text-7xl font-bold">
            Get fresh <span>Food</span> <br />
            an easy way
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            sapiente tempora. A, neque iste aperiam molestiae error beatae hic
            impedit libero magni voluptate quidem ullam reprehenderit.
          </p>
          <div className="main_btn flex items-center">
            <a href="#Menu">Order now</a>
            <i>
              <FaAngleRight />
            </i>
          </div>
        </div>
        <div className="main-image  ">
          <img src={chef} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
