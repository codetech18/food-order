import React from "react";
import "./Deal.css";
import plate from "../../assets/image/Food-Plate.png";
import art from "../../assets/image/art.png";

const Deal = () => {
  return (
    <>
      <div className="about" id="About">
        <div className="about_main">
          <div class="image">
            <img src={art} alt="" />
          </div>

          <div className="about_text">
            <h1>
              <span>Deal</span>Of The Day
            </h1>
            <h3>Why choose This ?</h3>
            <p>
              We are happy to announce new dish (Ramen Noodles) to the menu, if
              you buy the Ramen Noodles, you'd get a free yogurt Smoothie. Enjoy
              our new intercontinental dish featuring ramen noodles, eggs,
              vegetables and other spice.
            </p>
          </div>
        </div>

        <a href="#Menu" className="about_btn">
          Order Now
        </a>
      </div>
    </>
  );
};

export default Deal;
