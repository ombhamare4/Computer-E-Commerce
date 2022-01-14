import HProductCard from "../ProductCard/HProductCard";
const ProductHorizontalItem = (props) => {
  return (
    <div>
      <HProductCard
        id={props.id}
        image={props.image}
        name={props.name}
        price={props.price}
        comparedPrice={props.comparedPrice}
        category={props.category}
        subcategory={props.subcategory}
      />
    </div>
  );
};
export default ProductHorizontalItem;
