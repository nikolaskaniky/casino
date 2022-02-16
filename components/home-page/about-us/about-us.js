import React from "react";
import Image from "next/image";
import classes from "./about-us.module.scss";
import aboutUs from "../../../assets/home-page/about-us/about-us.JPG";

const AboutUs = () => {
  return (
    <section className={classes["about-us"]}>
      <div className={classes.title}>
        <h1>DESPRE</h1>
        <h4>NOI</h4>
        <div className={classes.line}></div>
      </div>

      <div className={classes.presentation}>
        <div className={classes.image}>
          <Image src={aboutUs} layout="fill" objectFit="cover" alt="img" />
        </div>

        <div className={classes.button}>
          <p>VEZI MAI MULTE</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
