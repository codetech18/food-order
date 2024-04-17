import React from "react";
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_main">
          <div className="footer_tag">
            <h2>Location</h2>
            <p>Sri Lanka</p>
            <p>USA</p>
            <p>India</p>
            <p>Japan</p>
            <p>Italy</p>
          </div>
          <div className="footer_tag">
            <h2>Quick Link</h2>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Gallary</p>
            <p>Order</p>
          </div>
          <div className="footer_tag">
            <h2>Contact</h2>
            <p>+94 12 3456 789</p>
            <p>+94 12 3456 789</p>
            <p>johndoe123@gmail.com</p>
            <p>foodshop@gmail.com</p>
          </div>
          <div className="footer_tag">
            <h2>Our Services</h2>
            <p>Fast Delivery</p>
            <p>Easy Payments</p>
            <p>24 x 7 service</p>
          </div>
          <div className="footer_tag">
            <h2>Follows</h2>
            <div className="flex justify-center">
              <i>
                <CiFacebook />
              </i>
              <i>
                <FaXTwitter />
              </i>
              <i>
                <FaInstagram />
              </i>
              <i>
                <CiLinkedin />
              </i>
            </div>
          </div>
        </div>

        <p class="end">
          Design by{" "}
          <span className="flex items-center">
            C
            <i>
              <CiFaceSmile />
            </i>
            detech
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
