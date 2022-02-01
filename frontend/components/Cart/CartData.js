import Link from "next/link";

import ShoppingProductCard from "./ShoppingProductCard";
import Checkout from "./Checkout";
// id: 1,
// name: "Core i9",
// price: "70000",
// comparedPrice: "90000",
// category: "CPU",
// image: "http

const CartData = (props) => {
  return (
    <div className="bg-white p-5">
      <div className="p-2">
        <h1 className="text-5xl font-bold">Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-4">
        <section className="col-span-2">
          <div>
            <h1 className="mb-5">3 Courses in Cart</h1>
            <div>
              <ul>
                {props.productslist.slice(0, 3).map((product) => (
                  <li key={product.id}>
                    <ShoppingProductCard
                        name ={product.name}
                        price = {product.price}
                        image = {product.image}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
            <Checkout/>
        </section>
      </div>
    </div>
  );
};

export default CartData;
