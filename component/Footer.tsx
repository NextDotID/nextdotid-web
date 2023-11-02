import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="wrapper">
          <Link href={"/"}>
            <Image
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
              Out Story
            </Link>
            <Link href={"/brand"} className="grid-item item-6">
              Brand Guidelines
            </Link>
          </div>
          <div className="link">
            <span>Join the Community</span>
            <Image
              className="arrow"
              width={20}
              height={20}
              src={"imgs/arrow-right.svg"}
              alt=""
            />
          </div>
        </div>
        <div className="divider" />
        <div className="bottom">
          <div>Copyright 2023 © Next.ID | All rights reserved</div>
          <div className="icons">
            <Link href={'https://twitter.com/NextDotID'}>
            <Image
              className="icon"
              width={32}
              height={32}
              src={"imgs/twitter.svg"}
              alt=""
            /></Link>
          
          <Link href={'https://twitter.com/NextDotID'}>
            <Image
              className="icon"
              width={32}
              height={32}
              src={"imgs/facebook.svg"}
              alt=""
            /></Link>
          <Link href={'https://twitter.com/NextDotID'}>
            <Image
              className="icon"
              width={32}
              height={32}
              src={"imgs/instagram.svg"}
              alt=""
            /></Link>
           <Link href={'https://twitter.com/NextDotID'}>
            <Image
              className="icon"
              width={32}
              height={32}
              src={"imgs/youtube.svg"}
              alt=""
            /></Link>
          <Link href={'https://twitter.com/NextDotID'}>
            <Image
              className="icon"
              width={32}
              height={32}
              src={"imgs/pinterest.svg"}
              alt=""
            /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
