"use client";
import Image from "next/image";
import Menu from "./Menu";
import Button from "./Button";
import Link from "next/link";
import useMatchBreakpoints from "@/utils/hooks";
import { useEffect, useRef, useState } from "react";
import SVG from "react-inlinesvg";

export default function Navbar() {
  const { isMobile } = useMatchBreakpoints();
  const mobileMenu = useRef<any>(null);
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [logoURL, setLogoURL] = useState("imgs/logo.svg");
  useEffect(() => {
    setMobile(isMobile);

    if (window?.innerWidth <= 960) {
      setLogoURL("imgs/logo-small-colored.svg");
    } else {
      setLogoURL("imgs/logo.svg");
    }
    document.addEventListener("click", (e) => {
      if (showOverlay && mobileMenu.current) {
        if (!mobileMenu.current.contains(e.target)) {
          setShowOverlay(false);
        }
      } else {
        return;
      }
    });
    if (showOverlay) {
      document.getElementsByClassName("app-container")[0].className =
        "app-container disable-scroll";
    } else {
      document.getElementsByClassName("app-container")[0].className =
        "app-container";
    }
    return document.removeEventListener("click", () => {
      setShowOverlay(false);
    });
  }, [showOverlay, isMobile]);
  return !mobile ? (
    <div className="navbar">
      <Link href={"/"}>
        <Image
          width={125}
          height={32}
          className="logo"
          src={logoURL}
          alt="next.id logo"
        />
      </Link>
      <Menu />
      <div className="dropdown">
        <div className="link-btn menu-item">
          <Button variant="primary">
            EXPERIENCE NEXT.ID
            <SVG width={20} height={20} src={"imgs/arrow-down.svg"} />{" "}
          </Button>
        </div>
        <div
          className="list"
          style={{
            borderTop: "none",
          }}
        >
          <Link className="list-item" href={"https://mask.io"} target="_blank">
            MASK NETWORK
            <SVG width={20} height={20} src="imgs/arrow-right.svg" />
          </Link>
          <Link className="list-item" href={"https://web3.bio"} target="_blank">
            WEB3.BIO
            <SVG width={20} height={20} src="imgs/arrow-right.svg" />
          </Link>
          <Link
            className="list-item"
            href={"https://twitter.com/NextDotID"}
            target="_blank"
          >
            <div className="center-self">
              <SVG width={20} height={20} src="imgs/x-colored.svg" />
              @NextDotID
            </div>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="navbar">
      <Link href={"/"} onClick={() => setShowOverlay(false)}>
        <SVG
          width={60}
          height={32}
          className="logo"
          src="imgs/menu/logo_mobile.svg"
        />
      </Link>
      <SVG
        style={{
          cursor: "pointer",
        }}
        onClickCapture={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowOverlay(true);
        }}
        src={"imgs/menu/menu_mobile.svg"}
        width={24}
        height={24}
      />
      {showOverlay && <div className="mask" />}
      <div
        ref={mobileMenu}
        className={`overlay ${showOverlay ? "active-overlay" : ""}`}
      >
        <Link href={"/"} onClick={() => setShowOverlay(false)}>
          <SVG className="logo" src="imgs/menu/mobile_logo_long.svg" />
        </Link>
        <div className="mobile-menu">
          <div className="mobile-menu-item">
            Products <SVG className="icon" src={"imgs/arrow-down.svg"} />
          </div>
          <div className="sub-menu">
            <Link
              href={"https://api.web3.bio"}
              target="_blank"
              className="sub-item"
            >
              Universal Profile SDK
            </Link>
            <Link
              href={"https://web3.bio"}
              target="_blank"
              className="sub-item"
            >
              <span> Web3 Bio</span>
            </Link>
            <Link href={"https://mask.io"} target="_blank" className="sub-item">
              <span>Mask Extension</span> for X<br />
              <p>(formerly Twitter)</p>
            </Link>
            <Link
              href={"https://firefly.land"}
              target="_blank"
              className="sub-item"
            >
              <span>Firefly App</span>
            </Link>
          </div>
          <div className="divider" />
          <Link
            href={"/faq"}
            onClick={() => {
              setShowOverlay(false);
            }}
            className="mobile-menu-item"
          >
            FAQ <SVG className="icon" src={"imgs/arrow-right.svg"} />
          </Link>
          <div className="divider" />
          <Link
            href={"https://t.me/NextDotIDofficial"}
            target="_blank"
            className="mobile-menu-item"
          >
            Community <SVG className="icon" src={"imgs/arrow-right.svg"} />
          </Link>
          <div className="divider" />

          <Link
            target="_blank"
            href={"https://medium.com/@Next.ID?utm_source=nextid"}
            className="mobile-menu-item"
          >
            Blog <SVG className="icon" src={"imgs/arrow-right.svg"} />
          </Link>
          <div className="divider" />
          <Link
            href={"/story"}
            onClick={() => {
              setShowOverlay(false);
            }}
            className="mobile-menu-item"
          >
            Our Story <SVG className="icon" src={"imgs/arrow-right.svg"} />
          </Link>
        </div>
        <div className="overlay-footer">
          <div>Experience Next.ID with:</div>
          <Link
            style={{
              width: "100%",
            }}
            href={"https://mask.io"}
            target="_blank"
          >
            <Button variant="third">
              MASK NETWORK <SVG src="imgs/arrow-right.svg" />
            </Button>
          </Link>
          <Link
            style={{
              width: "100%",
            }}
            href={"https://web3.bio"}
            target="_blank"
          >
            <Button variant="fifth">
              WEB.BIO <SVG src="imgs/arrow-right.svg" />
            </Button>
          </Link>
        </div>
        <Link
          className="center-self"
          href={"https://twitter.com/NextDotID"}
          target="_blank"
        >
          <SVG width={20} height={20} src="imgs/x-colored.svg" />
          @NextDotID
        </Link>
      </div>
    </div>
  );
}
