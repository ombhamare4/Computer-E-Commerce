import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
const HomeCarousel = () => {
  return (
    <div>
      <OwlCarousel
        className="owl-theme owl-loaded"
        loop
        dots={false}
        items={1}
        autoplay={true}
        autoplayTimeout={2000}
        animateOut='fadeOut'
      >
        <div class="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-01_cdca6597-97a6-45ef-ae6b-264bcd98c1ed.jpg?v=1566189048"
            className="w-full"
          />
        </div>
        <div class="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-02_e05e72fe-8a63-4a92-a257-856609c027ac.jpg?v=1566189060"
            className="w-full"
          />
        </div>
        <div class="item">
          <img
             src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-01_cdca6597-97a6-45ef-ae6b-264bcd98c1ed.jpg?v=1566189048"
            className="w-full"
          />
        </div>
      </OwlCarousel>
      ;
    </div>
  );
};

export default HomeCarousel;
