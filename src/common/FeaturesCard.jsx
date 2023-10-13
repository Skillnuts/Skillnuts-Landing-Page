import React from "react";

function FeaturesCard(props) {
  return (
    <figure className="border-2 border-secondary rounded-xl py-12">
      <div className="mb-2">
        <img
          src={props.data.image}
          alt=""
          className="w-28 2xl:w-32 2xl:mb-4 mx-auto"
          loading="lazy"
        />
      </div>
      <figcaption className="text-center">
        <h4 className="text-xl 2xl:text-2xl font-semibold font-poppins">{props.data.title}</h4>
        <p className="text-lg 2xl:text-xl">{props.data.subtitle}</p>
      </figcaption>
    </figure>
  );
}

export default FeaturesCard;
