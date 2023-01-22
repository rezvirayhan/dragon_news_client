import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/brand/Barnd_1.jpg";
import Brand2 from "../../../assets/brand/Brand_2.jpg";
import Brand3 from "../../../assets/brand/Brand_3.jpg";

const BrandCarousel = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
