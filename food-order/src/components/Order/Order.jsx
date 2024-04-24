import React, { useState } from "react";
import "./Order.css";
import order from "../../assets/image/order_image.png";
import axios from "axios";
import { useListItemsAndTotalPrice } from "../../Context";
import { useOrder } from "../../Context2";

// Define the DisplayOrderItems component
const DisplayOrderItems = ({ formattedItems, totalPrice }) => {
  return (
    <textarea
      placeholder="Food name"
      id="last"
      value={`${formattedItems}\nTotal Price: ${totalPrice}`}
      readOnly // Make the textarea read-only
    />
  );
};

const Order = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [order1, setOrder] = useState();
  const [table, setTable] = useState();

  const { listItemsAndTotalPrice } = useListItemsAndTotalPrice(); // Access the context
  const { orderItem } = useOrder(); // Access the order state using the useOrder hook

  const formatOrderItems = () => {
    return orderItem.map((item) => `${item.name}: ${item.price}`).join("\n");
  };

  // Function to calculate the total price of all items in the order
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    orderItem.forEach((item) => {
      totalPrice += parseFloat(item.price.replace("$", ""));
    });
    return totalPrice.toFixed(2); // Return the total price with two decimal places
  };

  // Calculate formatted items and total price
  const formattedItems = formatOrderItems();
  const totalPrice = calculateTotalPrice();

  const sendMail = () => {
    const formData = {
      email,
      subject,
      message: `\n${formattedItems}\n<br>Total Price: ${totalPrice}`, // Get list items and total price
      order1,
      table,
    };

    axios
      .get("http://localhost:4000", {
        params: formData,
      })
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  var Popup = () => {
    window.alert("Your Order has been taken you'll be attended to shortly ");
  };

  return (
    <>
      <div className="order" id="Order">
        <h1>
          <span>Order</span>Now
        </h1>

        <div className="order_main">
          <div className="order_image">
            <img src={order} alt="" />
          </div>

          <form action={Popup} className="grid-cols-2">
            <div className="input">
              <p>Name</p>
              <input
                type="text"
                placeholder="your name"
                id=""
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="input">
              <p>Email</p>
              <input
                type="email"
                placeholder="your email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <p> Table Number</p>
              <input
                type="number"
                placeholder="your table number"
                id=""
                onChange={(e) => setTable(e.target.value)}
              />
            </div>
            <div className="input">
              <p>How Much</p>
              <input
                type="number"
                placeholder="Amount of order"
                id=""
                onChange={(e) => setOrder(e.target.value)}
              />
            </div>
            <div className="input">
              <p>Your Order</p>
              {/* Render the DisplayOrderItems component */}
              <DisplayOrderItems
                formattedItems={formattedItems}
                totalPrice={totalPrice}
              />
            </div>
            <div className="input">
              {/* <p>Address</p>
              <input placeholder="your Address" id="" /> */}
            </div>

            <a
              className="order_btn"
              onClick={() => {
                sendMail();
                Popup();
              }}
            >
              Order Now
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Order;
