import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../public";
import { GiShoppingBag } from "react-icons/gi";
import { categories } from "../utils/data";
import { useStateContext } from "../context/StateContext";

const Menu = () => (
  <>
    {categories.map((item) => (
      <p key={item.id}>
        <Link href={`/category/search/${item.slug}`}>{item.name}</Link>
      </p>
    ))}
  </>
);

export default function Header() {
  const { totalQuantities } = useStateContext();

  const [navbarColor, setNavbarColor] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 1) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={
        navbarColor
          ? "shippr__header shippr__header__dark section__padding"
          : "shippr__header section__padding"
      }
    >
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={60} />
        </Link>
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="icons">
        <Link href={"/cart"}>
          <button type="button">
            <GiShoppingBag />
            <span className="counter">{totalQuantities}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
