import React from "react";
import AboutUs from "../components/home-page/about-us/about-us";
import Hero from "../components/home-page/hero/hero";
import MenuCategories from "../components/home-page/menu-categories/menu-categories";
import Welcome from "../components/home-page/welcome/welcome";
import classes from "./index.module.scss";

const HomePage = (props) => {
  return (
    <main className={classes["home-page"]}>
      <Hero />
      <Welcome />
      <MenuCategories />
      <AboutUs />
    </main>
  );
};

export default HomePage;
