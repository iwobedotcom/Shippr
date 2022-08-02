import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Confetti from "../utils/confetti";
import { Header } from "../components";
import { BiHappyAlt } from "react-icons/bi";

import { useStateContext } from "../context/StateContext";

export default function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    Confetti();
  }, []);

  return (
    <>
      <Head>
        <title>
          Order Successful - Shippr - Fastest eCommerce shopping platform for
          your Razer gadgets...
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
      <div className="shippr__success section__padding">
        <div className="container">
          <div className="icon">
            <BiHappyAlt />
          </div>
          <div className="message">
            <h3>Thank you for your Order!</h3>
            <p>Check your email inbox for your receipt.</p>
            <br />
            <p>
              If you have any questions, please email us on <br />
              <a href="mailto:support@shippr@email.com">
                support@shippr@email
              </a>{" "}
              or call <a href="tel:+0123456789">+0123456789</a>
            </p>
            <br />
          </div>
          <div className="button">
            <Link href="/">
              <button type="button">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
