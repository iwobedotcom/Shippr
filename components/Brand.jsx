import React from "react";
import Link from "next/link";
import Image from "next/image";
import { razer1, razer2, razer3 } from "../public";
import { RAZER_URL } from "../utils/data";

export default function Brand() {
  return (
    <div className="shippr__brand section__padding">
      <div className="heading">
        <h1>World&apos;s Greatest Brand</h1>
      </div>

      <div className="brand__container">
        <div>
          <Link href={RAZER_URL}>
            <Image src={razer1} alt="Razer" width={150} height={150} />
          </Link>
        </div>
        <div>
          <Link href={RAZER_URL}>
            <Image src={razer2} alt="Razer" width={150} height={150} />
          </Link>
        </div>
        <div>
          <Link href={RAZER_URL}>
            <Image src={razer3} alt="Razer" width={150} height={145} />
          </Link>
        </div>
      </div>
    </div>
  );
}
