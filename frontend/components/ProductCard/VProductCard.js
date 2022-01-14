import Link from "next/link";

import styles from "./VProduct.module.css";

import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";

const VProductCard = (props) => {
  return (
    <Link href={`products/${props.id}`}>
      <div className="text-center p-2 mb-2 text-md relative hover:shadow-xl  hover:rounded-lg   transition-all duration-500 ease-in-out hover:scale-110">
        <div className="rounded-lg  mb-2 relative flex items-center justify-center overflow-hidden object-cover h-60">
          <img
            className="bg-white absolute w-60 transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110"
            src={props.image}
          />
        </div>

        <h1 className="truncate px-5 my-1 text-gray-700 font-bold">
          {props.name}
        </h1>

        <p className="my-1">Rs.{props.price}</p>
        <p>
          Rs.<span className="my-1 line-through ">{props.comparedPrice}</span>
        </p>

        <div className="flex justify-center  items-center">
          <FaStar className="text-xl  rounded-full text-yellow-500" />
          <FaStar className="text-xl  rounded-full text-yellow-500" />
          <FaStar className="text-xl  rounded-full text-yellow-500" />
          <FaStar className="text-xl  rounded-full text-yellow-500" />
          <FaRegStar className="text-xl  rounded-full  text-yellow-500" />
        </div>

        <div className={styles.btn}>
          <button className="bg-red-500 p-2 rounded-full mx-2 text-white">
            + Add to Cart
          </button>
          <FaRegHeart className="mx-2 text-4xl bg-red-500  rounded-full  p-2 text-white" />
          <FaRegEye className="mx-2 text-4xl bg-red-500  rounded-full  p-2 text-white" />
        </div>
      </div>
    </Link>
  );
};

export default VProductCard;
