import HProductCard from "../ProductCard/HProductCard";
const ProductHorizontalItem = (props) => {
  return (
    <div>
      <HProductCard id={props.id} image={props.image} name={props.name} />
    </div>
  );
};
export default ProductHorizontalItem;
