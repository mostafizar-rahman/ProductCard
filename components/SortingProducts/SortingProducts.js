import React, { useEffect, useState } from "react";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import VerticalCard from "../VerticalCard/VerticalCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img14 from "../../assets/images/14.png";
const productsList = [
  {
    id: 1,
    title: "Shart",
    price: 20,
    rating: 5,
    image: img1,
  },
  {
    id: 2,
    title: "Shart",
    price: 20,
    rating: 5,
    image: img2,
  },
  {
    id: 3,
    title: "Shart",
    price: 20,
    rating: 5,
    image: img3,
  },
  {
    id: 4,
    title: "Shart",
    price: 20,
    rating: 5,
    image: img4,
  },
  {
    id: 5,
    title: "Shart",
    price: 20,
    rating: 5,
    image: img5,
  },
  {
    id: 6,
    title: "Shart",
    price: 20,
    rating: 5,
    image: img14,
  },
];
const SortingProducts = () => {
  return (
    <section className="mx-auto max-w-7xl  mt-16 hidden xl:grid lg:grid-cols-[20%_auto_20%] md:grid-cols-[25%_auto] gap-10 grid-cols-1 px-3 ">
      <div className="relative">
        <div>
          <h3 className="text-lg font-medium">New Products</h3>
        </div>
        <div className="mt-3">
          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={2}
              
            >
              <Slider>
                <div className="flex md:block">
                  {productsList.map(({ id, title, price, image }) => (
                    <Slide index={id} key={id}>
                      <HorizontalCard
                        title={title}
                        price={price}
                        image={image}
                      />
                    </Slide>
                  ))}
                </div>
              </Slider>
              <div className="absolute top-0 right-0 space-x-4">
                <ButtonBack>
                  <AiOutlineArrowLeft />
                </ButtonBack>
                <ButtonNext>
                  <AiOutlineArrowRight />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
      {/* ---------- Hot Trend Start */}
      <div className="relative">
        <h3 className="text-lg font-medium">Hot Trend</h3>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={2}
        >
          <Slider>
            <div className="flex justify-between space-x-5 mt-3">
              {productsList.map(({ id, title, price, image }) => (
                <Slide index={id} key={id}>
                  <VerticalCard
                    key={id}
                    title={title}
                    price={price}
                    image={image}
                  />
                </Slide>
              ))}
            </div>
          </Slider>
          <div className="absolute top-0 right-0 space-x-4">
            <ButtonBack>
              <AiOutlineArrowLeft />
            </ButtonBack>
            <ButtonNext>
              <AiOutlineArrowRight />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      {/* ---------- Hot Trend End */}
      <div className="relative">
        <h3 className="text-lg font-medium">Best Sell</h3>
        <div className="mt-3">
          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={2}
            >
              <Slider>
                <div className="flex md:block">
                  {productsList.map(({ id, title, price, image }) => (
                    <Slide index={id} key={id}>
                      <HorizontalCard
                        title={title}
                        price={price}
                        image={image}
                      />
                    </Slide>
                  ))}
                </div>
              </Slider>
              <div className="absolute top-0 right-0 space-x-4">
                <ButtonBack>
                  <AiOutlineArrowLeft />
                </ButtonBack>
                <ButtonNext>
                  <AiOutlineArrowRight />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SortingProducts;
