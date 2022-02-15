import HProductCard from "../ProductCard/HProductCard";
const ProductHorizontalItem = (props) => {
  var x = props.discountPrice;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var discountPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  var x = props.originalPrice;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var originalPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return (
    <div>
      <HProductCard
        id={props.id}
        image={props.image}
        name={props.name}
        originalPrice={originalPrice}
        discountPrice={discountPrice}
        category={props.category}
      />
    </div>
  );
};
export default ProductHorizontalItem;
