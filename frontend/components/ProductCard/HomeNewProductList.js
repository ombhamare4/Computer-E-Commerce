import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

import NewProductCard from "./NewProductCard";
import { GET_PRODUCTS } from "../../graphql/query";
import { useQuery } from "@apollo/client";

const HomeNewProductList = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  if (loading) return <p>loading</p>;
  if (error) return <p>Error Boss</p>;
  console.log(data);
  console.log(error);
  return (
    <div className="bg-white p-2 rounded-lg border-2 border-red-500">
      <div className="flex">
        <h1 className="text-xl text-white font-bold bg-red-500 p-2 rounded-r-full">
          New Products
        </h1>
      </div>
      <OwlCarousel
        className="owl-theme owl-loaded"
        loop
        dots={false}
        items={5}
        autoplay={true}
        autoplayTimeout={5000}
        animateOut="fadeOut"
      >
        {data.products.slice(0, 10).map((product) => (
          <div key={product._id} className="item">
            <NewProductCard
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
export default HomeNewProductList;
