import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CategorySideBar({
  categorySum,
  pcsSum,
  mobileSum,
  audioSum,
  keyboardsSum,
  consoleSum,
  gearSum,
  accessoriesSum,
}) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <div className="categore__filter">
        <div className="browse__filter">
          <h3>Browse Categories</h3>
          <ul className="category__header">
            <Link href={"/category/"}>
              <li value="all">
                All
                <span>{categorySum.length}</span>
              </li>
            </Link>
          </ul>
          <ul className="category__links">
            {/* {categories.map((item) => (
              <Link href={`/category/search/${item.name}`} key={item.id}>
                <li>{item.name}</li>
              </Link>
            ))} */}
            <Link href={`/category/search/pcs`}>
              <li>
                PCs
                <span>{pcsSum.length}</span>
              </li>
            </Link>
            <Link href={`/category/search/mobile`}>
              <li>
                Mobile
                <span>{mobileSum.length}</span>
              </li>
            </Link>
            <Link href={`/category/search/audio`}>
              <li>
                Audio
                <span>{audioSum.length}</span>
              </li>
            </Link>
            <Link href={`/category/search/keyboards`}>
              <li>
                Keyboards
                <span>{keyboardsSum.length}</span>
              </li>
            </Link>
            <Link href={`/category/search/console`}>
              <li>
                Console
                <span>{consoleSum.length}</span>
              </li>
            </Link>
            <Link href={`/category/search/gear`}>
              <li>
                Gear
                <span>{gearSum.length}</span>
              </li>
            </Link>
            <Link href={`/category/search/accessories`}>
              <li>
                Accessories
                <span>{accessoriesSum.length}</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
