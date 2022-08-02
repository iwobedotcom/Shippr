import React, { useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components";
import toast from "react-hot-toast";
import { FaSadTear } from "react-icons/fa";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

export default function Cart() {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    cartItemQuantity,
    onRemove,
    qty,
  } = useStateContext();
  const tax = (totalPrice * 5) / 100;

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <>
      <Head>
        <title>
          Shippr Cart - Fastest eCommerce shopping platform for your Razer
          gadgets...
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
      <div className="shippr__cart section__padding" ref={cartRef}>
        {cartItems.length >= 1 && (
          <h2>
            You have{" "}
            <small className="number__item">
              {totalQuantities} {totalQuantities > 1 ? "Items" : "Item"}
            </small>{" "}
            inside your cart
          </h2>
        )}

        {cartItems.length < 1 && (
          <div className="empty__cart__container">
            <div className="empty__cart">
              <FaSadTear />
              <h3>Sorry you have no item in your cart...</h3>
              <Link href="/">
                <button type="button">Continue Shopping</button>
              </Link>
            </div>
          </div>
        )}

        <div className="shopping__cart">
          {cartItems.length >= 1 && (
            <div className="">
              <div className="column__labels">
                <label className="product__image">Pictorial</label>
                <label className="product__details">Description</label>
                <label className="product__price">Price</label>
                <label className="product__quantity">Quantity</label>
                <label className="product__removal">Update</label>
              </div>
            </div>
          )}
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <div className="product__image shadow">
                  <Image
                    src={urlFor(item.image[0]).url()}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="product__details">
                  <div className="product__title">{item.name}</div>
                  <p className="product__description">{item.details}</p>
                </div>
                <div className="product__price">{item.price}</div>
                <div className="product__quantity">
                  <span
                    className="minus"
                    onClick={() => cartItemQuantity(item._id, "dec")}
                  >
                    <HiMinus />
                  </span>
                  <span className="cart__input">{item.quantity}</span>
                  <span
                    className="plus"
                    onClick={() => cartItemQuantity(item._id, "inc")}
                  >
                    <HiPlus />
                  </span>
                </div>
                <div className="product__removal">
                  <button
                    className="remove__product"
                    onClick={() => onRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <div className="">
              <div className="totals">
                <div className="totals__item">
                  <label>Subtotal</label>
                  <div className="totals__value">{totalPrice.toFixed(2)}</div>
                </div>
                <div className="totals__item">
                  <label>Tax (5%)</label>
                  <div className="totals__value">{tax.toFixed(2)}</div>
                </div>
                <div className="totals__item">
                  <label>Shipping</label>
                  <div className="totals__value">0</div>
                </div>
                <div className="totals__item totals__item__total">
                  <label>Grand Total</label>
                  <div className="totals__value">
                    {(totalPrice + tax).toFixed(2)}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="checkout"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
