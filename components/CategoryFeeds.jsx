import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner, CategoryCardContainer } from ".";
import { RiSearchFill } from "react-icons/ri";

export default function CategoryFeeds({ products }) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/category/search/${searchValue}`);
    }
  };

  return (
    <>
      <div className="categore__content">
        <div className="table__heading">
          <h3>
            <span>{products.length}</span>{" "}
            {products.length >= 1 ? "Items Found..." : "Item Found..."}
          </h3>
          <div>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search items..."
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />

              <span>
                <RiSearchFill />
              </span>
            </form>
          </div>
        </div>
        <div className="">
          {products.length ? (
            <div className="products__container">
              <CategoryCardContainer products={products} />
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
}
