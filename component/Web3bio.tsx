"use client";
import useMatchBreakpoints from "@/utils/hooks";
import Button from "./Button";
import SVG from "react-inlinesvg";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Web3bio() {
  const { isMobile } = useMatchBreakpoints();
  const [imgsrc, setImgsrc] = useState("imgs/web3bio.png");
  useEffect(() => {
    if (isMobile) {
      setImgsrc("imgs/mobile_web3bio.png");
    } else {
      setImgsrc("imgs/web3bio.png");
    }
  }, [isMobile]);

  return (
    <div className="web3bio">
      <div className="main">
        <div className="title">Web3.bio</div>
        <div className="subtitle">
          Search your ENS, Twitter handle, and 10+ profiles on Web3.bio and see
          how Next.ID Relation Service empowers next-gen link-in-bio too
        </div>
        <Link href="https://web3.bio" target="_blank">
          <Button variant="primary">
            VISIT WEB3.BIO{" "}
            <SVG width={20} height={20} src="imgs/arrow-right-up.svg" />
          </Button>
        </Link>
      </div>
      <img className="cover" src={imgsrc} alt="" />
    </div>
  );
}
