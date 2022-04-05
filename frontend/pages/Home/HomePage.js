import Layout from "../../components/Layout/Layout";
import HomeCarousel from "../../components/Carsouel/HomeCarousel";
import HomeNewProductList from "../../components/ProductCard/HomeNewProductList";
const HomePage = () => {
  return (
    <div>
      <Layout>
        <HomeCarousel />
        <HomeNewProductList/>
      </Layout>
    </div>
  );
};

export default HomePage;
