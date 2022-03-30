import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Image from "next/image";
import cap from '../../public/cap.jpg';
//import classes from './Slider2.module.css';
//import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Slider2 = () => {
    return (
        <>
          <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
          <div className="App">
            <Carousel breakPoints={breakPoints}>
              <Item><Image src={cap}/></Item>
              <Item>Two</Item>
              <Item>Three</Item>
              <Item>Four</Item>
              <Item>Five</Item>
              <Item>Six</Item>
              <Item>Seven</Item>
              <Item>Eight</Item>
            </Carousel>
          </div>
        </>
      );
}

export default Slider2;