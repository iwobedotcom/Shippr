import React from "react";
import Head from "next/head";
import axios from "axios";
import { BASE_URL } from "../../utils/data";
import { Header, CategoryFeeds, CategorySideBar } from "../../components";
import { client } from "../../lib/client";

export default function Category({
  products,
  categorySum,
  pcsSum,
  mobileSum,
  audioSum,
  keyboardsSum,
  consoleSum,
  gearSum,
  accessoriesSum,
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
      <div className="default__header">
        <Header />
      </div>
      <div className="shippr__categore section__padding">
        <CategorySideBar
          categorySum={categorySum}
          pcsSum={pcsSum}
          mobileSum={mobileSum}
          audioSum={audioSum}
          keyboardsSum={keyboardsSum}
          consoleSum={consoleSum}
          gearSum={gearSum}
          accessoriesSum={accessoriesSum}
        />
        <CategoryFeeds products={products} />
      </div>
    </>
  );
}

export async function getServerSideProps({ query: { category } }) {
  let response = null;

  if (category) {
    response = await axios.get(`${BASE_URL}/api/category/${category}`);
  } else {
    response = await axios.get(`${BASE_URL}/api/category/`);
  }

  const query = "*[_type == 'product']";
  const categorySum = await client.fetch(query);

  const pcsQuery = "*[_type == 'product' && category == 'pcs']";
  const pcsSum = await client.fetch(pcsQuery);

  const mobileQuery = "*[_type == 'product' && category == 'mobile']";
  const mobileSum = await client.fetch(mobileQuery);

  const audioQuery = "*[_type == 'product' && category == 'audio']";
  const audioSum = await client.fetch(audioQuery);

  const keyboardsQuery = "*[_type == 'product' && category == 'keyboards']";
  const keyboardsSum = await client.fetch(keyboardsQuery);

  const consoleQuery = "*[_type == 'product' && category == 'console']";
  const consoleSum = await client.fetch(consoleQuery);

  const gearQuery = "*[_type == 'product' && category == 'gear']";
  const gearSum = await client.fetch(gearQuery);

  const accessoriesQuery = "*[_type == 'product' && category == 'accessories']";
  const accessoriesSum = await client.fetch(accessoriesQuery);

  return {
    props: {
      products: response.data,
      categorySum,
      pcsSum,
      mobileSum,
      audioSum,
      keyboardsSum,
      consoleSum,
      gearSum,
      accessoriesSum,
    },
  };
}
