import Link from "next/link";
import styles from "./VProduct.module.css";

import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";

const HProductCard = (props) => {
  return (
    <Link href={`products/${props.id}`}>
      <div className="grid grid-cols-3 p-2 my-2 border border-t-2  xs:text-sm  md:text-md lg:text-lg hover:shadow-xl hover:rounded-lg transition-all duration-500 ease-in-out hover:scale-105 ">
        <div className=" p-2 rounded-lg  flex items-center justify-center  overflow-hidden object-cover w-full">
          <img
            className="bg-white  transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110"
            src={props.image}
            // width="200"
          />
        </div>
        <div className=" p-2 mx-2 col-span-2">
          <h1 className="text-gray-800 mb-2 xs:truncate">{props.name}</h1>
          <div className="flex items-center mb-2">
            <FaStar className="rounded-full text-yellow-500" />
            <FaStar className="rounded-full text-yellow-500" />
            <FaStar className="rounded-full text-yellow-500" />
            <FaStar className="rounded-full text-yellow-500" />
            <FaRegStar className="rounded-full  text-yellow-500" />
          </div>
          <h1 className="text-gray-800 truncate  mb-2">
            Rs. {props.price}
          </h1>
          <div className="xs:hidden">
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
    </Link>
  );
};

export default HProductCard;
