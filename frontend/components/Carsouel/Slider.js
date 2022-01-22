import React, { useState } from "react";
import { SliderImages } from "./SliderImages";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from "./Slider.module.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <FaArrowAltCircleLeft
        className={classes.leftArrow}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className={classes.rightArrow}
        onClick={nextSlide}
      />
      {SliderImages.map((slide, index) => {
        return (
          <div
            className={`${classes.slider} ${
              index === current ? "classes.active" : ""
            }`}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="Cool pics"
                className={classes.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
