import ProductItem from "./ProductItem";

const ProductList = (props) => {
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



  return (
    <div>
        <ul className="grid grid-cols-3 md:grid-cols-1">
          {props.products.map((products) => (
            <li key={products.id}>
              <ProductItem
                id={products.id}
                name={products.name}
                price={products.price}
                comparedPrice={products.comparedPrice}
                category={products.category}
                subcategory={products.subcategory}
                image = {products.image}
              />
            </li>
          ))}
        </ul>
    </div>
  );
};

export default ProductList;
