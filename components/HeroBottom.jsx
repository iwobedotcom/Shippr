import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";

export default function HeroBottom({ bannerData }) {
  const router = useRouter();
  const { onAdd, qty } = useStateContext();

  const handleBuyNow = () => {
    onAdd(bannerData, qty);

    router.push("/cart");
  };
  return (
    <div className="shippr__herobottom section__padding">
      <div className="column__one">
        <p>{bannerData.smallText}</p>
        <h1>
          <del>${bannerData.price + 100}</del>
        </h1>
        <h3>{bannerData.message}</h3>
      </div>
      <div className="column__two">
        <p>{bannerData.largeText}</p>
        <h1>${bannerData.price}</h1>
        <h3>50% Off</h3>
        <button type="button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
      <div className="image">
        <Image
          src={urlFor(bannerData.image).url()}
          alt={bannerData.smallText}
          width={1500}
          height={1500}
        />
      </div>
    </div>
  );
}
