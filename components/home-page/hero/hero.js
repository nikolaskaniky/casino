import React from "react";
import Carousel from "../../reusable/carousel/carousel";
import classes from "./hero.module.scss";
import { heroData } from "../../../data/hero-data";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Carousel
        array={heroData}
        isLooping={true}
        wrapperStyle={classes.wrapper}
        emblaStyle={classes.embla}
        viewportStyle={classes.viewport}
        containerStyle={classes.container}
        navigationStyle={classes.navigation}
        dotStyle={classes.dot}
        dotActiveStyle={classes.active}
        numerotation
      >
        {heroData.map((item, index) => (
          <div className={classes["embla__slide"]} key={index}>
            <div className={classes.presentation}>
              <h1>{item.text1}</h1>
              <h1>{item.text2}</h1>
              <h1>
                {item.text3} <span className={classes.line}></span>
              </h1>
            </div>

            <div className={classes.image}>
              <div className={classes["image-wrapper"]}>
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="contain"
                  alt="img"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
