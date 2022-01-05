import React from "react";
import headerIMG from "../../assets/header-img.png";
import arrowRightUp from "../../assets/arrow-right-up.png";

function Header() {
  return (
    <section className="flex flex-col items-center justify-between pt-24 layout md:pt-36 md:flex-row">
      <div className="flex-1">
        <h1 className="text-3xl font-extrabold sm:text-7xl">
          Build Your Awesome Platform
        </h1>
        <p className="w-full my-6 text-sm leading-8 sm:leading-10 sm:text-xl opacity-70">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
        <button className="flex items-center px-4 py-2 mr-2 text-sm font-medium rounded outline-none sm:text-xl sm:py-4 sm:px-7 bg-bg-btn">
          Our services
          <img src={arrowRightUp} alt="arrow-right-up" />
        </button>
      </div>
      <div className="flex-1 w-full">
        <img src={headerIMG} alt="headerImage"></img>
      </div>
    </section>
  );
}

export default Header;
