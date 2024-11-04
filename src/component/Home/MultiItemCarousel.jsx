import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMeels } from "./topMeel";
import CarouselItem from "./CarouselItem";
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "#22c55e",
        borderRadius: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "#22c55e",
        borderRadius: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};
const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Nút điều hướng trái
    nextArrow: <NextArrow />, // Nút điều hướng phải
    // arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        {topMeels.map((item) => (
          <CarouselItem image={item.image} title={item.title} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};
export default MultiItemCarousel;
