import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";

export default function Category({ categoryData }) {
  const pcs = categoryData.find((pcs) => pcs.slug === "pcs");
  const mobile = categoryData.find((mobile) => mobile.slug === "mobile");
  const audio = categoryData.find((audio) => audio.slug === "audio");
  const keyboards = categoryData.find(
    (keyboards) => keyboards.slug === "keyboards"
  );
  const controller = categoryData.find(
    (controller) => controller.slug === "console"
  );
  const gear = categoryData.find((gear) => gear.slug === "gear");
  const accessories = categoryData.find(
    (accessories) => accessories.slug === "accessories"
  );
  return (
    <div className="shippr__category section__padding">
      <div className="heading">
        <h1>Gadgets Category</h1>
      </div>
      <div className="category__container">
        <div className="one">
          <div className="image">
            <Image
              src={urlFor(pcs.image).url()}
              alt={pcs.smallText}
              width={1500}
              height={1500}
            />
          </div>
          <div className="content">
            <p>{pcs.smallText}</p>
            <h4>{pcs.largeText}</h4>
            <Link href={`/category/search/${pcs.slug}`}>Explore Now</Link>
          </div>
        </div>
        <div className="two">
          <div className="content">
            <p>{keyboards.smallText}</p>
            <h4>{keyboards.largeText}</h4>
            <Link href={`/category/search/${keyboards.slug}`}>Explore Now</Link>
          </div>
          <div className="image">
            <Image
              src={urlFor(keyboards.image).url()}
              alt={keyboards.smallText}
              width={1500}
              height={1500}
            />
          </div>
        </div>
        <div className="three">
          <div className="content">
            <p>{audio.smallText}</p>
            <h4>{audio.largeText}</h4>
            <Link href={`/category/search/${audio.slug}`}>Explore Now</Link>
          </div>
          <div className="image">
            <Image
              src={urlFor(audio.image).url()}
              alt={audio.smallText}
              width={1500}
              height={1500}
            />
          </div>
        </div>
        <div className="four">
          <div className="content">
            <p>{mobile.smallText}</p>
            <h4>{mobile.largeText}</h4>

            <Link href={`/category/search/${mobile.slug}`}>Explore Now</Link>
          </div>
          <div className="image">
            <Image
              src={urlFor(mobile.image).url()}
              alt={mobile.smallText}
              width={1500}
              height={1500}
            />
          </div>
        </div>
        <div className="five">
          <div className="content">
            <p>{controller.smallText}</p>
            <h4>{controller.largeText}</h4>
            <Link href={`/category/search/${controller.slug}`}>
              Explore Now
            </Link>
          </div>
          <div className="image">
            <Image
              src={urlFor(controller.image).url()}
              alt={accessories.smallText}
              width={1500}
              height={1500}
            />
          </div>
        </div>
        <div className="six">
          <div className="content">
            <p>{gear.smallText}</p>
            <h4>{gear.largeText}</h4>
            <Link href={`/category/search/${gear.slug}`}>Explore Now</Link>
          </div>
          <div className="image">
            <Image
              src={urlFor(gear.image).url()}
              alt={gear.smallText}
              width={1500}
              height={1500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
