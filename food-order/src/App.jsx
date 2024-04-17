import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Deal from "./components/Deal/Deal";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Deal />
      <Menu />
      <Order />
      <Team />
      <Footer />
    </>
  );
};

export default App;
