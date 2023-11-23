"use client";
import useMatchBreakpoints from "@/utils/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const { isMobile } = useMatchBreakpoints();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);
  return (
    <div className="footer">
      <div className="container">
        <div className="wrapper">
          <Link href={"/"}>
            <img
              className={"logo"}
              width={62}
              height={34}
              src={"imgs/logo-small.svg"}
              alt=""
            />
          </Link>
          <div className="grid">
            <div className="item-1">
              <div className="grid-item ">Product</div>
              {mobile ? (
                <div className="subtitle">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    href="https://api.web3.bio"
                    target="_blank"
                  >
                    {" "}
                    Universal Profile SDK
                  </Link>
                  <Link href={"https://web3.bio"} target="_blank">
                    Web3 Bio
                  </Link>

                  <Link href={"https://mask.io"} target="_blank">
                    Mask Extension for X
                  </Link>
                  <Link href={"https://firefly.land"} target="_blank">
                    Firefly App
                  </Link>
                </div>
              ) : (
                <div className="subtitle">
                  Universal Profile SDK <span className="dot">•</span>{" "}
                  <Link href={"https://web3.bio"} target="_blank">
                    Web3 Bio
                  </Link>
                  <span className="dot">•</span>{" "}
                  <Link href={"https://mask.io"} target="_blank">
                    Mask Extension for X
                  </Link>{" "}
                  <span className="dot">•</span>{" "}
                  <Link href={"https://firefly.land"} target="_blank">
                    Firefly App
                  </Link>
                </div>
              )}
            </div>
            <Link
              href={"https://medium.com/@Next.ID?utm_source=nextid"}
              target="_blank"
              className="grid-item item-2"
            >
              Blog
            </Link>
            <Link href={"/faq"} className="grid-item item-3">
              FAQ
            </Link>
            <Link
              href={"https://mirror.xyz/nextid.eth"}
              target="_blank"
              className="grid-item item-4"
            >
              Community
            </Link>
            <Link href={"/story"} className="grid-item item-5">
              Our Story
            </Link>
            <Link href={"/brand"} className="grid-item item-6">
              Brand Guidelines
            </Link>
          </div>
          <Link
            href={"https://mirror.xyz/nextid.eth"}
            target="_blank"
            className="link"
          >
            <span>Join the Community</span>
            <Image
              className="arrow"
              width={20}
              height={20}
              src={"imgs/arrow-right.svg"}
              alt=""
            />
          </Link>
        </div>
        <div className="divider" />
        <div className="bottom">
          <div>Copyright 2023 © Next.ID | All rights reserved</div>
          <div className="icons">
            <Link href={"https://twitter.com/NextDotID"} target="_blank">
              <Image
                className="icon"
                width={32}
                height={32}
                src={"imgs/x.svg"}
                alt=""
              />
            </Link>

            <Link href={"https://github.com/NextDotID"} target="_blank">
              <Image
                className="icon"
                width={32}
                height={32}
                src={"imgs/github.svg"}
                alt=""
              />
            </Link>
            <Link href={"https://medium.com/@Next.ID"} target="_blank">
              <Image
                className="icon"
                width={32}
                height={32}
                src={"imgs/medium.svg"}
                alt=""
              />
            </Link>
            <Link href={"https://t.me/NextDotIDofficial"} target="_blank">
              <Image
                className="icon"
                width={32}
                height={32}
                src={"imgs/telegram.svg"}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
