import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Deal from "./components/Deal/Deal";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import { ListItemsAndTotalPriceProvider } from "./Context";
import { OrderProvider } from "./Context2";

const App = () => {
  return (
    <>
      <ListItemsAndTotalPriceProvider>
        <OrderProvider>
          <NavBar />
          <Hero />
          <Deal />
          <Menu />
          <Order />
          <Team />
          <Footer />
        </OrderProvider>
      </ListItemsAndTotalPriceProvider>
    </>
  );
};

export default App;
