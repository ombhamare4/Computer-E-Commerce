import Link from "next/link";

import ShoppingProductCard from "./ShoppingProductCard";
import Checkout from "./Checkout";

const CartData = (props) => {
  return (
    <div className="bg-white p-5">
      <div className="p-2">
        <h1 className="text-5xl font-bold">Shopping Cart</h1>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-4 md:grid-cols-1 md:item-center">
        <section className="col-span-3 md:col-span-1">
          <div>
            <h1 className="mb-5">3 Courses in Cart</h1>
            <div>
              <ul>
                {props.productslist.slice(0, 3).map((product) => (
                  <li key={product.id}>
                    <ShoppingProductCard
                      name={product.name}
                      price={product.price}
                      image={product.image}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Checkout />
        </section>
      </div>
    </div>
  );
};

export default CartData;
