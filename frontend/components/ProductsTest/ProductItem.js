import VProductCard from "../ProductCard/VProductCard";
const ProductItem = (props) => {
  return (
    <div>
      <VProductCard
      id = {props.id}
      image={props.image}
      name={props.name}
      price ={props.price}
      comparedPrice=  {props.comparedPrice}
      category={props.category}
      subcategory = {props.subcategory}
      />
    </div>
  );
};
export default ProductItem;
