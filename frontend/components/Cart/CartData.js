import Link from "next/link";

import ShoppingProductCard from "./ShoppingProductCard";
import Checkout from "./Checkout";
import { useEffect, useState } from "react";
import { useAuth } from "../../api/authentication";
import NoAuth from "../Error/NoAuth";
const CartData = (props) => {
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  // const [isAuth, setIsAuth] = useState(false);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (props.cartData.cart.length === 0) {
      setIsCartEmpty(true);
    }
  }, []);

  return (
    <div className="bg-white p-5">
      {!isSignedIn() &&
      <NoAuth/>
      }
      {isSignedIn() && (
        <div>
          <div className="p-2">
            <h1 className="text-5xl font-bold">Shopping Cart</h1>
          </div>
          {isCartEmpty && <p>Want add product?</p>}

          {!isCartEmpty && (
            <div className="grid grid-cols-4 gap-8 mt-4 md:grid-cols-1 md:item-center">
              <section className="col-span-3 md:col-span-1">
                <div>
                  <h1 className="mb-5">3 Courses in Cart</h1>
                  <div>
                    <ul>
                      {props.cartData.cart.map((product) => (
                        <li key={product.id}>
                          <ShoppingProductCard
                            name={product.product.name}
                            price={product.product.price.discountPrice}
                            image={product.product.image}
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
          )}
        </div>
      )}
    </div>
  );
};

export default CartData;
