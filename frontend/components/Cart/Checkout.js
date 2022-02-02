const Checkout = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl mb-2">Total:</h1>
      <h1 className="text-4xl mb-2">₹1,890</h1>
      <h1 className="text-md mb-2 text-gray-500">₹10,497</h1>
      <h1 className="text-md mb-2 text-gray-500">82% off</h1>
      <div className="cursor-pointer bg-red-500 p-3 text-xl text-center  relative hover:shadow-xl  transition-all duration-500 ease-in-out hover:scale-110">
        <h1 className="text-white">Checkout</h1>
      </div>
    </div>
  );
};

export default Checkout;
