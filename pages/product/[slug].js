import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Header, ProductCard } from "../../components";
import { HiPlus, HiMinus } from "react-icons/hi";
import { client, urlFor } from "../../lib/client";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-hot-toast";

import { useStateContext } from "../../context/StateContext";

export default function ProductDetails({ product, products }) {
  const router = useRouter();
  const {
    name,
    image,
    details,
    price,
    category,
    availability,
    rating,
    numReviews,
  } = product;
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    router.push("/cart");
  };

  // const handleAddToCart = () => {
  //   onAdd(product, qty);
  //   toast.success(`${qty} ${name} added to Cart`);
  // };

  return (
    <>
      <Head>
        <title>
          {name} - Fastest eCommerce shopping platform for your Razer gadgets...
        </title>
        <meta
          name="description"
          content="Fastest eCommerce shopping platform for your Razer gadgets..."
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="default__header">
        <Header />
      </div>
      <div className="shippr__product__parent">
        <div className="shippr__product section__padding">
          <div className="product__image">
            <div className="image">
              <Image
                src={urlFor(image && image[index]).url()}
                alt={name}
                width={500}
                height={500}
              />
            </div>
            <div className="image__carousel">
              <ul>
                {image?.map((item, i) => (
                  <li key={i}>
                    <Image
                      src={urlFor(item).url()}
                      alt={name}
                      width={500}
                      height={500}
                      className={i === index ? "selected__image" : ""}
                      onMouseEnter={() => setIndex(i)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="product__details">
            <h1>{name}</h1>
            <div className="reviews">
              <div>
                <span>
                  {/* Rating is set in 20, 25..., 100 */}
                  <Rating ratingValue={rating} readonly size={22} />
                </span>
                <span className="numReviews">({numReviews} reviews)</span>
              </div>
            </div>
            <div className="price">
              <h3>${price}</h3>
              <del>
                <h3>
                  <del>${price}</del>
                </h3>
              </del>
            </div>
            <ul className="list">
              <li>
                <span>Category</span> :{" "}
                <Link href={`/category/search/${category}`}>{category}</Link>
              </li>
              <li>
                <span>Availability</span> : <strong>{availability}</strong>
              </li>
            </ul>
            <div className="desc">
              <h4>Description :</h4>
              <p>{details}</p>
            </div>
            <div className="quantity">
              <span className="minus" onClick={decQty}>
                <HiMinus />
              </span>
              <span className="quantity__input">{qty}</span>
              <span className="plus" onClick={incQty}>
                <HiPlus />
              </span>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="add__to__cart"
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
              <button type="button" className="buy__now" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="shippr__maylike__product section__padding">
          <div className="heading">
            <h1>Compare Similar Items</h1>
          </div>
          <div className="marquee__container track">
            {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "product"] {
      slug {
        current
      }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = "*[_type == 'product']";
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
}
