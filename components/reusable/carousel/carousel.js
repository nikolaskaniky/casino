import React, { useEffect, useCallback, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classes from "./carousel.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = (props) => {
  const {
    array,
    isLooping,
    arrows,
    wrapperStyle,
    emblaStyle,
    navigationStyle,
    dotStyle,
    numerotation,
    viewportStyle,
    containerStyle,
    buttonStyle,
    prevStyle,
    nextStyle,
    isAutoplaying,
    dotActiveStyle,
  } = props;
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = useRef(
    Autoplay(
      { delay: 8000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }
    //     [
    //     autoplay.current,
    //   ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi && emblaApi.scrollTo(index, false);
      autoplay.current.reset();
    },
    [emblaApi]
  );

  return (
    <div className={`${classes.wrapper} ${wrapperStyle}`}>
      <div className={`${classes.embla} ${emblaStyle}`}>
        <div
          className={`${classes["embla__viewport"]} ${viewportStyle}`}
          ref={emblaRef}
        >
          <div className={`${classes["embla__container"]} ${containerStyle}`}>
            {props.children}
          </div>
        </div>

        {arrows && (
          <>
            <div
              className={`${classes["prev"]} ${buttonStyle} ${prevStyle}`}
              onClick={scrollPrev}
            >
              <IoIosArrowBack />
            </div>
            <div
              className={`${classes["next"]} ${buttonStyle} ${nextStyle}`}
              onClick={scrollNext}
            >
              <IoIosArrowForward />
            </div>
          </>
        )}
      </div>

      <div className={`${classes.navigation} ${navigationStyle}`}>
        {array.map((_, index) => {
          return (
            <div
              key={index}
              className={`${classes.dot} ${dotStyle} ${
                selectedIndex === index && dotActiveStyle
              }`}
              onClick={() => scrollTo(index)}
            >
              {numerotation && <p>{index + 1}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
