import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PortofolioCard from "../../components/portofolioCard/PortofolioCard";
import Content from "./Content.js";
import "./portofolio.css";

function Portofolio() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="pt-24 layout">
      <h1 className="text-6xl font-extrabold">Our Awesome Portofolio</h1>
      <Carousel responsive={responsive} showDots={true} className="py-16">
        {Content.map((item, index) => {
          const { image, name } = item;
          return <PortofolioCard key={index} name={name} image={image} />;
        })}
      </Carousel>
    </div>
  );
}

export default Portofolio;
