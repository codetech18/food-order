import React, { useState } from "react";
import "./Menu.css";
import burger from "../../assets/image/buger.jpg";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";
import cake from "../../assets/image/spag.jpg";
import sandwich from "../../assets/image/sandwich.jpg";
import pasta from "../../assets/image/pasta.jpg";
import Hot_dog from "../../assets/image/Hot_dog.jpg";
import lasagna from "../../assets/image/Africa dishes and recipes.jpg";
import ice_cream from "../../assets/image/Delicious vegetable yam porridge.jpg";
import pizza from "../../assets/image/pizza.jpg";
import juse from "../../assets/image/juse.jpg";
import biryani from "../../assets/image/biryani.webp";
import chocolate_drink from "../../assets/image/Fish pepper soup.jpg";
import chocolate from "../../assets/image/Unknown.jpg";
import food1 from "../../assets/image/1.jpg";
import food2 from "../../assets/image/zobo.jpeg";
import food3 from "../../assets/image/Orange.jpeg";
import food4 from "../../assets/image/Strawberry.jpeg";
import food5 from "../../assets/image/4.jpg";
import food6 from "../../assets/image/pancakes.jpeg";
import chicken from "../../assets/image/combo1.jpeg";
import shawarma from "../../assets/image/shawarma.jpeg";
import { useOrder } from "../../Context2";

const Menu = () => {
  const { orderItem, addToOrder } = useOrder();

  const handleAddToOrder = (itemName, itemPrice) => {
    addToOrder(itemName, itemPrice);
    alert("added to order");
    // Additional logic if needed
  };

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
                Enjoy the classic burger with beef patty, melted cheese,and
                other, served on a toasted sesame seed bun.
              </p>
              <h3>$10.00</h3>
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
                onClick={() => handleAddToOrder("Burger", "$10.00")}
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
              <h2>Grilled Chicken Salad</h2>
              <p>
                Tender grilled chicken breast slices atop a bed of romaine
                lettuce, tossed with cheese, croutons, and creamy dressing.
              </p>
              <h3>$12.00</h3>
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
                onClick={() =>
                  handleAddToOrder("Grilled Chicken Salad", "$12.00")
                }
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
              <h2>Spaghetti Bolognese</h2>
              <p>
                Spaghetti noodles smothered in a meaty Bolognese sauce made with
                beef, tomatoes, onions, and aromatic herbs.
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
                onClick={() =>
                  handleAddToOrder("Spaghetti Bolognese", "$20.00")
                }
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
              <h2>Jollof Rice</h2>
              <p>
                Nigerian-style jollof rice cooked in a flavorful tomato sauce
                with other spices, served with grilled chicken pieces.
              </p>
              <h3>$25.00</h3>
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
                onClick={() => handleAddToOrder("Jollof Rice", "$25.00")}
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
              <h2>White rice and Special sauce</h2>
              <p>
                Enjoy our white rice with special sauce made with tomato sauce,
                beef and other ingredients.
              </p>
              <h3>$10.00</h3>
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
                onClick={() =>
                  handleAddToOrder("White rice and Special sauce", "$10.00")
                }
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
              <h2>Ewedu and amala special</h2>
              <p>
                A traditional Nigerian dish featuring Ewedu soup along with
                gbegiri with assorted meats, served with hot Amala.
              </p>
              <h3>$30.00</h3>
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
                onClick={() => handleAddToOrder("Ewedu and amala", "$30.00")}
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
              <h2>Yam Pottage</h2>
              <p>
                A comforting dish made with chicken, yam, tomatoes, peppers, and
                spices, slow-cooked into a delicious one-pot meal.
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
                onClick={() => handleAddToOrder("Yam Pottage", "$20.00")}
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
              <h2>Margherita Pizza</h2>
              <p>
                A traditional italian delight with a thin crust topped with rich
                tomato sauce, fresh chesse, and basil leaves.
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
              <h2>Chapman Cocktail</h2>
              <p>
                A refreshing Nigerian cocktail made with Fanta, Sprite,
                Angostura bitters, grenadine syrup, and lemon slices .
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
                onClick={() => handleAddToOrder("Chapman Cocktail", "$20.00")}
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
                Enjoy our aromatic south asian dish made with rice, spices and
                chicken, and vegetables.
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
              <h2>Fish pepper soup</h2>
              <p>
                Enjoy our spicy pepper soup made with catfish and spices for
                that tingling sensation.
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
                onClick={() => handleAddToOrder("Fish pepper soup", "$20.00")}
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
              <h2>English Breakfast</h2>
              <p>
                Enjoy our special english breakfast featuring eggs, bacon,
                sausage, toast, beans and mushrooms.
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
                onClick={() => handleAddToOrder("English Breakfast", "$20.00")}
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
              <h2>Ofada Special</h2>
              <p>
                Enjoy our Ofada rice (local rice) with special sauce made with
                beef and spices to make you feel that Nigerian groove.
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
                onClick={() => handleAddToOrder("Ofada Special", "$20.00")}
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
              <h2>Zobo Drink</h2>
              <p>
                A traditional Nigerian hibiscus drink infused with ginger,
                pineapple and spices, served chilled.
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
                onClick={() => handleAddToOrder("Zobo Drink", "$20.00")}
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
              <h2>Chivita Orange Juice</h2>
              <p>
                Enjoy your meal with Freshly squeezed orange juice packed with
                vitamins and natural goodness.
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
                onClick={() =>
                  handleAddToOrder("Chivita Orange Juice", "$20.00")
                }
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
              <h2>Yogurt Smoothie</h2>
              <p>
                Enjoy your meal with Creamy yogurt blended with fresh fruits
                like strawberries, bananas, and honey.
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
                onClick={() => handleAddToOrder("Yogurt Smoothie", "$20.00")}
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
              <h2>Ramen Noodles</h2>
              <p>
                Enjoy our new intercontinental dish featuring ramen noodles,
                eggs, vegetables and other spice.
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
                onClick={() => handleAddToOrder("Ramen Noodles", "$20.00")}
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
                Fluffy golden brown, pancakes are a classic breakfast option.
                Served with syrup, butter, they're a delightful treat to start
                your day.
              </p>
              <h3>$10.00</h3>
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
                onClick={() => handleAddToOrder("Pancake", "$10.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={chicken} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Chicken and Chips</h2>
              <p>
                A hearty meal featuring tender chicken cooked to perfection
                alongside crispy golden fries.
              </p>
              <h3>$16.00</h3>
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
                onClick={() => handleAddToOrder("Chicken and Chips", "$16.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
          <div className="menu_card w-80 pt-2 mb-5">
            <div className="menu_image ">
              <img src={shawarma} alt="" />
            </div>

            <div className="small_card">
              <i>
                <FaHeart />
              </i>
            </div>

            <div className="menu_info">
              <h2>Shawarma</h2>
              <p>
                shawarma is a delicious wrap filled with thinly sliced meat,
                vegetables, and flavorful sauces, Perfectly seasoned and
                grilled.
              </p>
              <h3>$5.00</h3>
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
                onClick={() => handleAddToOrder("Shawarma", "$5.00")}
              >
                Add To Order
              </a>
            </div>
          </div>
        </div>
        <div className="button1">
          <button className="button">
            <a href="#Order">Proceed to Order</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
