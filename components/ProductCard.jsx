import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

export default function ProductCard({ product }) {
  const { name, image, price, slug } = product;

  return (
    <>
      <div className="card">
        <div className="card__image">
          <Image
            src={urlFor(image && image[0]).url()}
            alt={name}
            width={500}
            height={500}
          />
        </div>
        <div className="card__content">
          <h3>{name}</h3>
          <h2 className="price">${`${price}`}</h2>
          <Link href={`/product/${slug.current}`}>
            <a className="buy">More Details</a>
          </Link>
        </div>
      </div>
    </>
  );
}
