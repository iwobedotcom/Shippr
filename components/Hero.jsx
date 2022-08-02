import React from "react";
import { urlFor } from "../lib/client";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { toast } from "react-hot-toast";

export default function Hero({ bannerData }) {
  const { onAdd, qty } = useStateContext();

  const handleBuyNow = () => {
    onAdd(bannerData, qty);
    router.push("/cart");
  };

  const handleAddToCart = () => {
    onAdd(bannerData, qty);
    toast.success(`${qty} ${bannerData.largeText} added to Cart`);
  };
  return (
    <div className="shippr__hero section__padding" id="home">
      <div className="shippr__hero__image">
        <Image
          src={urlFor(bannerData.image).url()}
          alt={bannerData.smallText}
          width={1500}
          height={1500}
        />
      </div>
      <div className="shippr__hero__content">
        <h3>{bannerData.smallText}</h3>
        <h1>{bannerData.largeText}</h1>
        <p>{bannerData.details}</p>
        <span>
          <p>&#x2015; ${bannerData.price}</p>
          <p>
            <del>${bannerData.price + 100}</del>
          </p>
        </span>
        <div>
          <button type="button" onClick={handleAddToCart}>
            Add To Cart
          </button>
          <button type="button" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
