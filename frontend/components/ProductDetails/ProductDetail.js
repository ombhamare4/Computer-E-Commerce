import Head from "next/head";
import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Countdown from "react-countdown";
import React, { useEffect, useState } from "react";

import CountDownTimer from "../CountDownTimer/CountDownTimer";
import CustomerReviewForm from "../Reviews/CustomerReviewForm";
import CustomerReview from "../Reviews/CustomerReview";

import ReactImageMagnify from "react-image-magnify";

const ProductDetail = (props) => {
  var x = props.productData.price.discountPrice;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var discountPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  var x = props.productData.price.originalPrice;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var originalPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  return (
    <div>
      <Head>
        <title>{props.productData.name}</title>
        <meta name="description" content={props.productData.description} />
        <link rel="icon" href="/Jupiterfull.png" />
      </Head>

      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="p-16">
          <div className="grid grid-cols-2 md:grid-cols-1">
            <div className=" border mr-5 p-2 rounded-lg  flex items-center justify-center  overflow-hidden object-cover w-auto">
              {/* <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: `${props.productData.image}`,
                  },
                  largeImage: {
                    src: `${props.productData.image}`,
                    width: 1200,
                    height: 1800,
                  },
                }}
              /> */}
              <img
                className="bg-white w-auto transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-150"
                src={props.productData.image}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {props.productData.company}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {props.productData.name}
              </h1>
              <div className="flex items-center mb-2">
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaRegStar className="rounded-full  text-yellow-500" />
              </div>
              {/* <Countdown
                date={Date.now() + 10000}
                intervalDelay={0}
                precision={3}
                renderer={(props) => <div>{props.total}</div>}
              /> */}

              {/* <CountDownTimer /> */}

              <p className="leading-relaxed my-2">
                {props.productData.description}
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs. {discountPrice}
                  <span className="text-sm  line-through mx-2">
                    Rs.{originalPrice}
                  </span>
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Buy
                </button>
                <button className="rounded-full w-10 h-10 bg-red-500 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <CustomerReview reviews={props.reviews} />
      </div>
    </div>
  );
};

export default ProductDetail;
