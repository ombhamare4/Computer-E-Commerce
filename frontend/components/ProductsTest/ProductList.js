import ProductVerticlItem from "./ProductVerticlItem";
import ProductHorizontalItem from "./ProductHorizontalItem";
import { useEffect, useState } from "react";

const ProductList = (props) => {
  const AllProducts = props.products;

  const [newproducts, setNewProducts] = useState([]);

  const SortSelectedPriceValue = parseInt(props.priceSort);
  var SortSelectedValue = props.sortSelected;

  // const SortByPrice = () => {
  //   setNewProducts(AllProducts);
  //   if (SortSelectedPriceValue === 0) {
  //     setNewProducts(AllProducts);
  //   }

    // if (SortSelectedPriceValue === 1) {
    //   var newproductslist = AllProducts.filter(function (el) {
    //     return parseInt(el.price) >= 1000 && parseInt(el.price) <= 10000;
    //   });
    // }
    // else if (SortSelectedPriceValue === 2) {
    //   var newproducts = AllProducts.filter(function (el) {
    //     return parseInt(el.price) > 10000 && parseInt(el.price) <= 25000;
    //   });
    // } else if (SortSelectedPriceValue === 3) {
    //   var newproducts = AllProducts.filter(function (el) {
    //     return parseInt(el.price) > 25000 && parseInt(el.price) <= 50000;
    //   });
    // } else if (SortSelectedPriceValue === 4) {
    //   var newproducts = AllProducts.filter(function (el) {
    //     return parseInt(el.price) > 50000;
    //   });

  //   console.log(newproducts);
  // };

  // SortByPrice();
  // useEffect(() => {
  //   SortByPrice();
  // }, [SortSelectedPriceValue, AllProducts,newproducts]);

  return (
    <div>
      {props.changeView && (
        <ul className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {props.products.map((products) => (
            <li key={products.id}>
              <ProductVerticlItem
                id={products.id}
                name={products.name}
                price={products.price}
                comparedPrice={products.comparedPrice}
                category={products.category}
                subcategory={products.subcategory}
                image={products.image}
              />
            </li>
          ))}
        </ul>
      )}
      {!props.changeView && (
        <ul className="">
          {props.products.map((products) => (
            <li key={products.id}>
              <ProductHorizontalItem
                id={products.id}
                name={products.name}
                price={products.price}
                comparedPrice={products.comparedPrice}
                category={products.category}
                subcategory={products.subcategory}
                image={products.image}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

// const SortByPrice = (SortSelectedPriceValue) => {
// if (SortSelectedPriceValue === 0) {
//   setNewProducts(newproducts);
// }

// if (SortSelectedPriceValue === 1) {
//   var newproducts = AllProducts.filter(function (el) {
//     return parseInt(el.price) >= 1000 && parseInt(el.price) <= 10000;
//   });
// }
// else if (SortSelectedPriceValue === 2) {
//   var newproducts = AllProducts.filter(function (el) {
//     return parseInt(el.price) > 10000 && parseInt(el.price) <= 25000;
//   });
// } else if (SortSelectedPriceValue === 3) {
//   var newproducts = AllProducts.filter(function (el) {
//     return parseInt(el.price) > 25000 && parseInt(el.price) <= 50000;
//   });
// } else if (SortSelectedPriceValue === 4) {
//   var newproducts = AllProducts.filter(function (el) {
//     return parseInt(el.price) > 50000;
//   });
// }

// setNewProducts(newproducts);
// };

// const collectionname = props.collectionname.replaceAll(" ", "").toLowerCase();
// console.log(collectionname);

// const newproducts = props.products.filter(function (products) {
//   if (
//     products.category.replaceAll(" ", "").toLowerCase() === collectionname
//   ) {
//     return products;
//   } else if (collectionname === "all") {
//     return products;
//   }
// });

// console.log(props.priceSort);
// console.log(props.sortSelected);

// console.log(props.changeView);
