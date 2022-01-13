import VProductCard from "../ProductCard/VProductCard";
import HProductCard from "../ProductCard/HProductCard";
const ProductVerticlItem = (props) => {
  return (
    <div>
      <VProductCard
        id={props.id}
        image={props.image}
        name={props.name}
        price={props.price}
        comparedPrice={props.comparedPrice}
        category={props.category}
        subcategory={props.subcategory}
      />
      {/* <HProductCard id={props.id} image={props.image} name={props.name} /> */}
    </div>
  );
};
export default ProductVerticlItem;
