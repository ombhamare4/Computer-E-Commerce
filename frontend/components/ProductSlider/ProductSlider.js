import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "./slick.module.css";
import {  multiData } from "./data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowAltCircleLeft style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowAltCircleRight style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 4,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  //centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = (props) => {
  return (
    <div style={{ margin: "5px", width: "95%",marginLeft:"25px"  }} className="carousel">
      <h1>Basic carousel</h1>
      <Slider {...carouselProperties}>
        {multiData.map((props) => (
          <Card item={props} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ( item ) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRNDING TVs</p>
      <p style={{ fontSize: "16px", padding: "5px 0", color: "green" }}>
        From ₹ 7,000
      </p>
      <p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
        Up To ₹ 5,000 Off on HDFC
      </p>
    </div>
  );
};

export default MultiItemCarousel;