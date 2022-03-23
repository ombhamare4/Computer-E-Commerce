import ShoppingProductCard from "./ShoppingProductCard";
import Checkout from "./Checkout";
import { useEffect, useState } from "react";
import { useAuth } from "../../api/authentication";
import NoAuth from "../Error/NoAuth";
const CartData = (props) => {
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  // const [cartData, setCartData] = useState(props.cartData);
  const [productId, setProductId] = useState(null);
  const { isSignedIn, userID } = useAuth();
//  console.log(cartData);
  // console.log(props.cartData);

  // const [removeFromCart] = useMutation(REMOVE_FROM_CART);
  console.log("Here is Cart data"+props.cartData);
  // useEffect(() => {
  //   if (cartData.length === 0) {
  //     setIsCartEmpty(true);
  //   }
  //   // console.log("Here is product id to remove: " + productId);
  //   setCartData(cartData)
  //   // removeProduct();
  // }, [cartData]);



  let sumDiscount = 0;
  let sumOriginal = 0;
  props.cartData.map((product) => {
    sumDiscount = sumDiscount + parseInt(product.product.price.discountPrice);
    sumOriginal = sumOriginal + parseInt(product.product.price.originalPrice);
  });
  const TotalDiscount =100 - (sumDiscount * 100) / sumOriginal;



  return (
    <div className="bg-white p-5">
      {!isSignedIn() && <NoAuth />}
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
                      { props.cartData.map((product) => (
                        <li key={product.product._id}>
                          <ShoppingProductCard
                            id={product.product._id}
                            name={product.product.name}
                            price={product.product.price.discountPrice}
                            image={product.product.image}
                            setProductId={setProductId}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <Checkout
                  sumDiscount={sumDiscount}
                  sumOriginal={sumOriginal}
                  TotalDiscount={TotalDiscount}
                />
              </section>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartData;

