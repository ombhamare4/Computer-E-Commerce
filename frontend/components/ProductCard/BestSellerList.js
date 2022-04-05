import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

import NewProductCard from "./NewProductCard";
import { GET_PRODUCTS } from "../../graphql/query";
import { useQuery } from "@apollo/client";

const BestSellerList = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  if (loading) return <p>loading</p>;
  if (error) return <p>Error Boss</p>;
  console.log(data);
  console.log(error);

  const options = {
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800:{
          items:1,
      },
      1000: {
        items: 5,
      },
    },
  };
  const heightseller = "h-56  lm:h-96  xs:h-40"
  const imageheight = "xs:h-40"
  return (
    <div className="bg-white p-2 rounded-lg border-2 border-red-500">
      <div className="flex">
        <h1 className="text-xl text-white font-bold bg-red-500 p-2 rounded-r-full">
          Best Seller
        </h1>
      </div>
      <OwlCarousel className="owl-theme owl-loaded" {...options}>
        {data.products.slice(10, 15).map((product) => (
          <div key={product._id} className="item">
            <NewProductCard
            height={heightseller}
            imgheight={imageheight}
              name={product.name}
              image={product.image}
              price={product.price.discountPrice}
            />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};
export default BestSellerList;
