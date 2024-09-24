import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import Carousel1 from "./images/carousel1.jpg";
import Carousel2 from "./images/carousel2.jpg";
import Carousel3 from "./images/carousel3.jpg";

function CarouselSlide() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <CarouselImage imageUrl={Carousel1} />
          <Carousel.Caption>
            <h3>Quick & Delicious Recipes</h3>
            <p>
              Easy meals with fresh ingredients for every taste and occasion.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <CarouselImage imageUrl={Carousel2} />
          <Carousel.Caption>
            <h3>Healthy Home-Cooked Delights</h3>
            <p>Nourishing, flavorful recipes to energize your daily routine.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage imageUrl={Carousel3} />
          <Carousel.Caption>
            <h3>Flavorful Feasts in Minutes</h3>
            <p>
              Whip up restaurant-quality dishes with minimal effort and time.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselSlide;
