import React from "react";
import chef1 from "../../assets/image/chef1.png";
import chef2 from "../../assets/image/chef2.png";
import chef3 from "../../assets/image/chef3.jpg";
import chef4 from "../../assets/image/chef4.jpg";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="team">
        <h1>
          Our <span>Chefs</span>
        </h1>

        <div className="team_box">
          <div className="profile">
            <img src={chef1} alt="" />

            <div className="info">
              <h2 className="name">Chef</h2>
              <p className="bio">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                debitis.
              </p>
            </div>
          </div>
          <div className="profile">
            <img src={chef2} alt="" />

            <div className="info">
              <h2 className="name">Chef</h2>
              <p className="bio">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                debitis.
              </p>
            </div>
          </div>
          <div className="profile">
            <img src={chef3} alt="" />

            <div className="info">
              <h2 className="name">Chef</h2>
              <p className="bio">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                debitis.
              </p>
            </div>
          </div>
          <div className="profile">
            <img src={chef4} alt="" />

            <div className="info">
              <h2 className="name">Chef</h2>
              <p className="bio">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                debitis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
