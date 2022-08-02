import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { categories } from "../utils/data";
import {
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { logoIcon } from "../public";
import appStore from "../public/images/apple-store.png";
import playStore from "../public/images/play-store.png";

export default function Footer() {
  return (
    <div className="shippr__footer section__padding">
      <div className="container">
        <div className="information">
          <h3>Information</h3>
          <ul>
            <li>
              <Link href={"#"}>About Us</Link>
            </li>
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"#"}>News</Link>
            </li>
            <li>
              <Link href={"#"}>Store</Link>
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Category</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/category/search/${category.slug}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="my__account">
          <h3>My Accounts</h3>
          <ul>
            <li>
              <Link href={"#"}>My Account</Link>
            </li>
            <li>
              <Link href={"#"}>Wishlist</Link>
            </li>
            <li>
              <Link href={"#"}>Community</Link>
            </li>
            <li>
              <Link href={"#"}>Order History</Link>
            </li>
            <li>
              <Link href="/cart">My Cart</Link>
            </li>
          </ul>
        </div>
        <div className="promo">
          <h3>Weekly Sales Promo</h3>
          <p>
            Subscribe Now! and be among the regular weekly winners who stand a
            chance to get more than 50% off purchases...
          </p>
          <div>
            <form>
              <input type="text" placeholder="Enter Email Here..." />
              <button type="submit">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="acknowledgement">
        <div className="logo">
          <Image src={logoIcon} alt="logo" width={90} />
        </div>
        <div className="socials">
          <ul>
            <li>
              <Link href={"#"}>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <FaTwitch />
              </Link>
            </li>
          </ul>
        </div>
        <div className="apps">
          <ul>
            <li>
              <Link href={"#"}>
                <Image
                  src={appStore}
                  alt="Apple AppStore"
                  title="Apple AppStore"
                  width={120}
                  height={38}
                />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image
                  src={playStore}
                  alt="Google PlayStore"
                  title="Google PlaStore"
                  width={120}
                  height={38}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            Copyright © {moment().format("YYYY")} All rights reserved.{" "}
            <span>Shippr</span>
          </p>
        </div>
      </div>
    </div>
  );
}
