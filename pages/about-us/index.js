import React from "react";
import AboutUsCarousel from "../../components/about-us-page/carousel/about-us-carousel";
import Presentation from "../../components/about-us-page/presentation/presentation";
import classes from "./index.module.scss";

const AboutUsPage = () => {
  return (
    <main className={classes["about-us-page"]}>
      <AboutUsCarousel />
      <Presentation />
    </main>
  );
};

export default AboutUsPage;