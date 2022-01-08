import React from "react";

function ServicesCard(props) {
  console.log(props.icon);
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-w-[21rem] text-center  h-[300px] sm:px-5 px-10">
      <img src={props.icon} alt={props.name} />
      <h4 className="my-5 text-3xl font-bold sm:text-2xl">{props.name}</h4>
      <p className="text-lg sm:text-base opacity-70">{props.description}</p>
    </div>
  );
}

export default ServicesCard;
