import React from "react";
import Banner from "@/components/Banner/Banner";
import Card1 from "@/components/Card/Card1/Card1";
import Card2 from "@/components/Card/Card2/Card2";
import Footer from "@/components/Footer/Footer";
import CategorieCard from "@/components/CategorieCard/CategorieCard";
import SortingProducts from "@/components/SortingProducts/SortingProducts";
import Card3 from "@/components/Card/Card3/Card3";
import { categoryCarData } from "@/utilt/categoryCardData";
import { cardData } from "@/utilt/CardData";

const Home = () => {
  return (
    <>
      <Banner />
      <SortingProducts />
      {/* ---------- Category */}
      <section className="mx-auto max-w-7xl mt-16 px-3">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
          {categoryCarData.map(({ id, title, category }) => (
            <CategorieCard key={id} title={title} category={category} />
          ))}
        </div>
      </section>
      {/* ------------ Card 1 */}
      <section className="mx-auto max-w-7xl mt-16 px-3">
        <h3 className="font-semibold text-xl">Card 1</h3>
        <div className="mt-3 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </section>
      {/* -------------- Card 2 */}
      <section className="mx-auto max-w-7xl mt-16 px-3">
        <h3 className="font-semibold text-xl">Card 2</h3>
        <div className="mt-3 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {cardData.map(({ id, title, price, image }) => (
            <Card2
              key={id}
              title={title}
              price={price}
              image={image}
             
            />
          ))}
        </div>
      </section>
      {/* --------------- Card 3 */}
      <section className="mx-auto max-w-7xl mt-16 px-3">
        <h3 className="font-semibold text-xl">Card 3</h3>
        <div className="mt-3 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {cardData.map(({ id, title, price, image, description }) => (
            <Card3
              key={id}
              title={title}
              price={price}
              image={image}
              description={description}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
