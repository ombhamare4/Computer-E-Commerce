import Link from "next/link";
const Checkout = (props) => {
  var x = props.sumDiscount;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var discountPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  var x = props.sumOriginal;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var originalPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  return (
    <div className="p-2">
      <h1 className="text-2xl mb-2">Total:</h1>
      <h1 className="text-4xl mb-2">Rs. {discountPrice}</h1>
      <h1 className="text-md mb-2 text-gray-500">Rs. {originalPrice}</h1>
      <h1 className="text-md mb-2 text-gray-500">
        {props.TotalDiscount.toFixed(2)}% off
      </h1>
      <Link href="/checkout">
        <div className="cursor-pointer bg-red-500 p-3 text-xl text-center  relative hover:shadow-xl  transition-all duration-500 ease-in-out hover:scale-110">
          <h1 className="text-white">Checkout</h1>
        </div>
      </Link>
    </div>
  );
};

export default Checkout;
