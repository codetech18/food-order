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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              molestias, perferendis sed exercitationem quae nam nisi recusandae
              eligendi non consequuntur minus facilis eaque distinctio, libero
              accusantium culpa dolores placeat.
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
