import React, { useState, createContext, useContext } from "react";

// Create a context for the order items
const OrderContext = createContext();

// Custom hook to use the order context
export const useOrder = () => useContext(OrderContext);

// Order provider component
export const OrderProvider = ({ children }) => {
  const [orderItem, setOrderItem] = useState([]);

  // Function to add an item to the order
  const addToOrder = (itemName, itemPrice) => {
    setOrderItem([...orderItem, { name: itemName, price: itemPrice }]);
  };

  return (
    <OrderContext.Provider value={{ orderItem, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
