import React from "react";

function PortofolioCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default PortofolioCard;
