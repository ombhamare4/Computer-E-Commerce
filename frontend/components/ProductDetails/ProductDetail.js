import Head from "next/head";
import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Countdown from "react-countdown";
import React, { useEffect, useState } from "react";

import CountDownTimer from "../CountDownTimer/CountDownTimer";

const ProductDetail = (props) => {


  const { name, image, price, comparedPrice, category } = props.productInfo;

  console.log(props.productInfo);
  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content=" Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan."
        />
        <link rel="icon" href="/Jupiterfull.png" />
      </Head>

      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="p-16">
          <div className="grid grid-cols-2 md:grid-cols-1">
            <div className=" border mr-5 p-2 rounded-lg  flex items-center justify-center  overflow-hidden object-cover w-auto">
              <img
                className="bg-white w-auto transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-150"
                src={image}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                DELL
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {name}
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

              <CountDownTimer/>

              <p className="leading-relaxed my-2">
                - Heavy duty metal frame Premium gaming cabinet (mid tower) with
                optimized design for better air flow and ventilation -
                Motherboard RGB sync support with the RGB / Fan controller and
                remote control, given inside the package - Fully functional
                remote control with 100+ LED modes, static colors, LED speed
                control, motherboard sync option brightness adjustment and much
                more - 4x 120mm Center glow RGB fans on front, top and rear
                panels. Additional fans can be added on the front and top panels
                - Supports installation of mATX and ATX form factor
                motherboards. Accommodates 3x SSD (max.) and 1x HDD (max.) -
                165mm space for CPU cooler and 300mm space for VGA graphics
                installation - Well defined front panel connectors with USB 3.0
                and Audio ports - RGB / Fan controller with support for max. 10
                connections - Additional AIO cooler installation is supported on
                Front, top and rear panels - RGB backlit side panel with
                Boomerang design and Tempered glass panels on either sides, for
                a picture perfect gaming rig
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs. {price}
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
    </div>
  );
};

export default ProductDetail;

{
  /* <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div> */
}
