import React from "react";
import { GadgetCard } from "../components";

export default function Gadget({ bestsellerData }) {
  return (
    <div className="shippr__gadget section__padding">
      <div className="heading">
        <h1>Best Seller Gadgets</h1>
      </div>

      <div className="gadget__container">
        {bestsellerData?.map((product) => (
          <GadgetCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
