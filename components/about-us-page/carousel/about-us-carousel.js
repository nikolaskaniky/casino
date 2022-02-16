import React from "react";
import Carousel from "../../reusable/carousel/carousel";
import classes from "./carousel.module.scss";
import { aboutUsData } from "../../../data/about-us-data";
import Image from "next/image";

const AboutUsCarousel = () => {
  return (
    <section className={classes.carousel}>
      <Carousel
        array={aboutUsData}
        isLooping={true}
        wrapperStyle={classes.wrapper}
        emblaStyle={classes.embla}
        viewportStyle={classes.viewport}
        containerStyle={classes.container}
        navigationStyle={classes.navigation}
        dotStyle={classes.dot}
        dotActiveStyle={classes.active}
        buttonStyle={classes.button}
        prevStyle={classes["prev"]}
        nextStyle={classes["next"]}
        arrows
      >
        {aboutUsData.map((item, index) => (
          <div className={classes["embla__slide"]} key={index}>
            <div className={classes["image-wrapper"]}>
              <Image
                src={item.image}
                layout="fill"
                alt="img"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default AboutUsCarousel;
