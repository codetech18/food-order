import React, { useState } from "react";
import "./Menu.css";
import burger from "../../assets/image/buger.jpg";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";
import cake from "../../assets/image/cake.jpg";
import sandwich from "../../assets/image/sandwich.jpg";
import pasta from "../../assets/image/pasta.jpg";
import Hot_dog from "../../assets/image/Hot_dog.jpg";
import lasagna from "../../assets/image/lasagna.webp";
import ice_cream from "../../assets/image/ice_cream.jpg";
import pizza from "../../assets/image/pizza.jpg";
import juse from "../../assets/image/juse.jpg";
import biryani from "../../assets/image/biryani.webp";
import chocolate_drink from "../../assets/image/chocolate_Drink.jpg";
import chocolate from "../../assets/image/chocolate.jpg";
import food1 from "../../assets/image/gallary_1.jpg";
import food2 from "../../assets/image/gallary_2.jpg";
import food3 from "../../assets/image/gallary_3.jpg";
import food4 from "../../assets/image/gallary_4.jpg";
import food5 from "../../assets/image/gallary_5.jpg";
import food6 from "../../assets/image/gallary_6.jpg";
import { useOrder } from "../../Context2";

const Menu = () => {
  const { orderItem, addToOrder } = useOrder();

  const handleAddToOrder = (itemName, itemPrice) => {
    addToOrder(itemName, itemPrice);
    alert("added to order");
    // Additional logic if needed
  };
  // const [orderItem, setOrderItem] = useState([]);

  // const addToOrder = (itemName, itemPrice) => {
  //   setOrderItem([...orderItem, { name: itemName, price: itemPrice }]);
  // };
  // const logOrder = () => {
  //   console.log(orderItem);
  // };

  const listItemsAndTotalPrice = () => {
    let totalPrice = 0;
    let itemsList = "";

    orderItem.forEach((item) => {
      itemsList += `${item.name}: $${item.price}\n`; // Concatenating name and price
      totalPrice += parseFloat(item.price.replace("$", ""));
    });

    itemsList += `Total Price: $${totalPrice.toFixed(2)}`; // Adding total price
    return totalPrice;
  };

  return (
    <>
      <div className="menu w-full py-16 px-0" id="Menu">
        <h1 className="text-8xl flex italic  justify-center mt-32 mb-12 items-center ">
          Our <span className=" ml-4  underline">Menu</span>
        </h1>

        <div className="menu_box grid-cols-4 grid my-0 mx-auto">
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={burger} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Burger</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Burger", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={sandwich} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Sandwhich</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Sandwich", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={cake} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Cake</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Cake", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={pasta} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Pasta</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Pasta", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={Hot_dog} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>HotDog</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("HotDog", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={lasagna} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Lasagna</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Lasagna", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={ice_cream} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>IceCream</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Ice Cream", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={pizza} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Pizza</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Pizza", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={juse} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Juice</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Juice", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={biryani} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Biryani</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Biryani", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={chocolate_drink} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Choco</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Choclate Drink", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={chocolate} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Chocolate</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Chocolate", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={food1} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Bread</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Bread", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={food2} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>CupCake</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Blueberry Cake", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={food3} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>cupCake</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Chocolate", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={food4} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Bread</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Bread", "$20.00")}
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={food5} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Pizza</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Pizza", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={food6} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>PanCake</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Pancake", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={burger} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Burger</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Burger", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={burger} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Burger</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, rem.
              </p>
              <h3>$20.00</h3>
              <div class="menu_icon flex justify-center">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <IoMdStarHalf />
                </i>
              </div>
              <a
                className="menu_btn"
                onClick={() => handleAddToOrder("Burger", "$20.00")}
              >
                Add To Order
              </a>
            </div>
          </div>

          <button className="button">
            <a href="#Order">Proceed to Order</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
