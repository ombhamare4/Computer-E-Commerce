import { FaTag, FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { useMutation, gql } from "@apollo/client";
import { useAuth } from "../../api/authentication";

const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($productId: String!, $userId: String!) {
    removeFromCart(productID: $productId, userID: $userId) {
      product {
        name
      }
    }
  }
`;

const ShoppingProductCard = (props) => {
  const {userID} = useAuth();
  const [removeFromCart] = useMutation(REMOVE_FROM_CART);

  var x = props.price;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var discountPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  const removeProductHandler = (event) => {
    const productId = event.target.value;
    removeFromCart({ variables: { productId: productId, userId: userID } });
  };



  return (
    <div className="my-2 p-2  relative hover:shadow-xl  transition-all duration-500 ease-in-out hover:scale-100">
      <div className="grid grid-cols-4 gap-2 lg:grid-cols-2 xs:grid-cols-1">
        <div className="flex justify-center">
          <img className="p-2 " src={props.image} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-lg font-semibold mb-2 xs:text-md">{props.name}</h1>
          <div className="flex  items-center mb-2">
            <p className="text-lg mr-2 ">Rs.{discountPrice}</p>
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
            <button value={props.id} onClick={removeProductHandler}>
              Remove
            </button>
          </h1>
          <h1 className="text-blue-700">
            <button>Add to favourite</button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShoppingProductCard;
