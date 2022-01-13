import Link from "next/link";

import styles from "./VProduct.module.css";

import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";


const HProductCard = (props)=>{
    return(
    <div>
        <div className="flex border border-red-500 p-2 my-2 ">
        <div className=" border border-red-500 rounded-lg relative flex items-center justify-center  overflow-hidden object-cover h-60">
          <img
            className="bg-white  w-60 transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110"
            src={props.image}
            width="200"
          />
        </div>
        <div className="border border-red-500 p-2 mx-2">
            <h1>{props.name}</h1>
        </div>

        </div>
    </div>
    )
};

export default HProductCard;