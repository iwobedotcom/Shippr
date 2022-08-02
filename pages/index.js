import React from "react";
import Head from "next/head";
import { client } from "../lib/client";
import {
  Hero,
  Category,
  Gadget,
  Promo,
  Header,
  HeroBottom,
  Brand,
} from "../components";

export default function Home({
  products,
  bannerData,
  categoryData,
  promoData,
  bestsellerData,
}) {
  return (
    <>
      <Head>
        <title>
          Shippr - Fastest eCommerce shopping platform for your Razer gadgets...
        </title>
        <meta
          name="description"
          content="Fastest eCommerce shopping platform for your Razer gadgets..."
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="image__background">
        <Header />
        <Hero products={products} bannerData={bannerData[0]} />
      </div>
      <Category categoryData={categoryData} />
      <Gadget bestsellerData={bestsellerData} />
      <Promo promoData={promoData.length && promoData[0]} />
      <Brand />
      <HeroBottom bannerData={bannerData.length && bannerData[0]} />
    </>
  );
}

export async function getServerSideProps() {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  const categoryQuery = "*[_type == 'category']";
  const categoryData = await client.fetch(categoryQuery);

  const promoQuery = "*[_type == 'promo']";
  const promoData = await client.fetch(promoQuery);

  const bestsellerQuery = "*[_type == 'bestseller']";
  const bestsellerData = await client.fetch(bestsellerQuery);

  return {
    props: { products, bannerData, categoryData, promoData, bestsellerData },
  };
}
