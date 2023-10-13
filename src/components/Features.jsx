import React from "react";
import { features } from "../data/constant";
import FeaturesCard from "../common/FeaturesCard";

function Features() {
  return (
    <section className="container mx-auto mb-8 lg:mb-12">
      <h2 className="mb-4 text-center">
        <span className="text-lg lg:text-2xl 2xl:text-3xl font-medium uppercase font-poppins">
          Is drishya ko sochiye: Apka vyapar ab ek adbhut vijay ki kahani hai
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((value, i) => {
          return <FeaturesCard data={value} key={i} />;
        })}
      </div>
    </section>
  );
}

export default Features;
