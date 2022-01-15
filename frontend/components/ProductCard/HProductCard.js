import Link from "next/link";

import styles from "./VProduct.module.css";

import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";

const HProductCard = (props) => {
  return (
    <div>
      <div className="flex p-2 my-2  relative hover:shadow-xl hover:rounded-lg transition-all duration-500 ease-in-out hover:scale-105 ">
        <div className=" border p-2 border-gray-500 rounded-lg relative flex items-center justify-center  overflow-hidden object-cover h-60">
          <img
            className="bg-white  w-60 transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110"
            src={props.image}
            width="200"
          />
        </div>
        <div className=" p-2 mx-2">
          <h1 className="text-xl text-gray-800 mb-2">
            {props.name}
          </h1>
          <div className="flex items-center mb-2">
            <FaStar className="text-xl  rounded-full text-yellow-500" />
            <FaStar className="text-xl  rounded-full text-yellow-500" />
            <FaStar className="text-xl  rounded-full text-yellow-500" />
            <FaStar className="text-xl  rounded-full text-yellow-500" />
            <FaRegStar className="text-xl  rounded-full  text-yellow-500" />
          </div>
          <h1 className="text-xl text-gray-800 w-full truncate  mb-2">Rs. {props.price}</h1>
          <div>
            <div className="flex">
              <button className="bg-red-500 px-3 py-2 rounded-full mr-2 text-white">
                + Add to Cart
              </button>
              <FaRegHeart className="mx-2 text-4xl bg-red-500  rounded-full  p-2 text-white" />
              <FaRegEye className="mx-2 text-4xl bg-red-500  rounded-full  p-2 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HProductCard;
