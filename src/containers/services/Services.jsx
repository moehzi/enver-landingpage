import React from "react";
import { ServicesCard } from "../../components";
import Content from "./Content";

function Services() {
  return (
    <div className="pt-24 layout">
      <h1 className="text-[2.625rem] font-extrabold sm:text-6xl md:text-center max-w-[700px] mx-auto">
        The Service We Provide For You
      </h1>
      <div className="flex flex-wrap justify-center w-full gap-10 pt-12">
        {Content.map((item, index) => {
          const { icon, name, description } = item;
          return (
            <ServicesCard
              key={index}
              name={name}
              icon={icon}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
