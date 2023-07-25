import Image from "next/image";
import Home1 from "../../assets/images/home1.png";
import Home2 from "../../assets/images/home2.webp";
import Home3 from "../../assets/images/home3.png";
import Home4 from "../../assets/images/home4.png";
import Home5 from "../../assets/images/home5.jpg";
import Home6 from "../../assets/images/home6.jpg";
import { AiFillCalendar } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className=" grid lg:grid-cols-[30%_50%_20%] md:grid-cols-[30%_70%] grid-cols-1 ">
      <div className="lg:row-span-2 hidden md:block">
        <Image
          alt="image"
          src={Home1}
          width={400}
          height={600}
          className="w-full lg:h-[700px] h-[600px] object-cover"
        />
      </div>
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          autoPlay={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          // renderArrowsWhenDisabled={false}
          // containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="relative h-[600px] w-full">
            <Image
              alt="image"
              src={Home2}
              width={600}
              height={600}
              className="w-full h-[600px]"
            />
            <div className="max-w-sm absolute top-1/4 left-0 z-50 bg-black bg-opacity-30 text-slate-100 p-3">
              <h3 className="lg:text-3xl text-xl font-semibold">Chear</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                autem quis? Ullam cum aut temporibus?
              </p>
            </div>
          </div>
          <div className="relative h-[600px] w-full">
            <Image
              alt="image"
              src={Home5}
              width={600}
              height={600}
              className="w-full h-[600px]"
            />
            <div className="max-w-sm absolute top-1/4 left-0 z-50 bg-black bg-opacity-30 text-slate-100 p-3">
              <h3 className="lg:text-3xl text-xl font-semibold">Chear</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                autem quis? Ullam cum aut temporibus?
              </p>
            </div>
          </div>
          <div className="relative h-[600px] w-full">
            <Image
              alt="image"
              src={Home6}
              width={600}
              height={600}
              className="w-full h-[600px]"
            />
            <div className="max-w-sm absolute top-1/4 left-0 z-50 bg-black bg-opacity-30 text-slate-100 p-3">
              <h3 className="lg:text-3xl text-xl font-semibold">Chear</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                autem quis? Ullam cum aut temporibus?
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="hidden lg:block">
        <div className="relative h-[300px] w-full">
          <Image
            alt="image"
            src={Home3}
            width={300}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="max-w-sm absolute bottom-0 left-5 z-50">
            <h3 className="lg:text-3xl text-xl font-semibold text-slate-100">
              Hooded
            </h3>
          </div>
        </div>
        <div className="relative h-[300px] w-full">
          <Image
            alt="image"
            src={Home4}
            width={300}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="max-w-sm absolute bottom-0 left-5 z-50">
            <h3 className="lg:text-3xl text-xl font-semibold text-slate-100">
              T-Shart
            </h3>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 col-span-2 px-3 lg:px-0  lg:gap-0 gap-5">
        <div className="flex items-center space-x-5 bg-slate-100 h-[100px] mb-3 rounded-md lg:rounded-none ">
          <AiFillCalendar className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold">SUPPORT 24/7</h2>
            <i className="text-sm">We support online 24hrs</i>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-slate-100 h-[100px] mb-3 rounded-md lg:rounded-none ">
          <FiRefreshCcw className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold">FREE RETURN</h2>
            <i className="text-sm">30 days money back guarantee</i>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-slate-100 h-[100px] mb-3 rounded-md lg:rounded-none ">
          <FaTelegramPlane className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold">FREE SHIPPING</h2>
            <i className="text-sm">Free shipping on all order</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
