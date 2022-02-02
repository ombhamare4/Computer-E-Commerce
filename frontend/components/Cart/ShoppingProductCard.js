import { FaTag, FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
const ShoppingProductCard = (props) => {
  return (
    <div className="my-2 p-2  relative hover:shadow-xl  transition-all duration-500 ease-in-out hover:scale-100">
      <div className="grid grid-cols-4 gap-2 lg:grid-cols-2">
        <div className="flex justify-center">
          <img className="p-2 " src={props.image} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-lg font-semibold mb-2">{props.name}</h1>
          <div className="flex  items-center mb-2">
            <p className="text-lg mr-2 ">Rs. 28,469</p>
            <FaTag />
          </div>
          <div className="flex  lg:block ">
            <div className="bg-yellow-300 text-black w-24 text-center mr-2">
              <h1>Best Seller</h1>
            </div>
            <div className="flex items-center lg:mt-2">
              <h1 className="mr-1 text-gray-700">4.4</h1>
              <div className="flex mb-1 mr-1">
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaRegStar className="rounded-full  text-yellow-500" />
              </div>
              <div className="mr-1 text-gray-700">
                <h1>(1200 ratings)</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right lg:flex ">
          <h1 className="text-blue-700 lg:mx-2">
            <Link href="/cart">Remove</Link>
          </h1>
          <h1 className="text-blue-700">
            <Link href="/cart">Add to favourite</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShoppingProductCard;
