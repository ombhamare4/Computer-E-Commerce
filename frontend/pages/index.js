import Head from "next/head";
<<<<<<< HEAD
import Image from "next/image";

//CSS Imports Here
import styles from "../styles/Home.module.css";
//Componensts Import Here
import Layout from "../components/Layout/Layout";
import Account from "./account";
import CarouselTest from "../components/Testing/Carousel";
import Slider from "../components/Carsouel/Slider";
import $ from "jquery";
import Login from "../components/omcustomlogin/Login";
import { images } from "../components/Carsouel/SliderImages";
import CatalogMenu from "../components/CatalogMenu/CatalogMenu";
import MultiItemCarousel from "../components/ProductSlider/ProductSlider";
import { multiData } from "../components/ProductSlider/data";
import SliderArrival from "../components/ProductSlider/SliderArrival";
import HomeCarousel from "../components/Carsouel/HomeCarousel";
import SliderBestseller from "../components/ProductSlider/SliderBestseller";
import RecomProduct from "../components/HomeRecommended/RecomProduct";
import ProductAd1 from "../components/ProductAds/ProductAd1";
import ProductAd2 from "../components/ProductAds/ProductAd2";
import classes from "./index.module.css";
=======
//Componensts Import Here
import Layout from "../components/Layout/Layout";

import HomeCarousel from "../components/Carsouel/HomeCarousel";
>>>>>>> b204937728ce8373bc7e94b0a1b73007a642d791

export default function Home() {
  // const [token, setToken] = useState(null);
  // const [userId, setUserId] = useState(null);

  // AuthContext.login = (token, userId, tokenExpiration) => {
  //   setTimeout(() => setToken(token), 0);
  //   setTimeout(() => setUserId(userId), 0);
  // };

  // AuthContext.logout = () => {
  //   setToken(null);
  //   setUserId(null);
  // };

  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Jupiterfull.png" />
      </Head>
      <Layout>
        <HomeCarousel />
<<<<<<< HEAD
        <SliderArrival />
        <SliderBestseller />
        <div className={classes.layout}>
          <ProductAd1 />
          <ProductAd2 />
        </div>
        <RecomProduct />
=======
>>>>>>> b204937728ce8373bc7e94b0a1b73007a642d791
      </Layout>
    </div>
  );
}
