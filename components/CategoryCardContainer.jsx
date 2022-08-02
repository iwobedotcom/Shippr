import React from "react";
import { CategoryCard } from ".";

export default function CategoryCardContainer({ products }) {
  return (
    <div className="product__container__flex">
      {products.map((item) => (
        <CategoryCard key={item._id} product={item} />
      ))}
    </div>
  );
}
