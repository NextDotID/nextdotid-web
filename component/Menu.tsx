import Link from "next/link";
import SVG from "react-inlinesvg";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="dropdown">
        <div className="menu-item">
          Products <SVG width={20} height={20} src={"imgs/arrow-down.svg"} />{" "}
        </div>
        <div className="list">
          <Link
            href={"https://api.web3.bio"}
            target="_blank"
            className="list-item"
          >
            Universal Profile SDK{" "}
            <SVG width={20} height={20} src={"imgs/arrow-right-up.svg"} />
          </Link>
          <Link href={"https://web3.bio"} target="_blank" className="list-item">
            <span>Web3 Bio</span>{" "}
            <SVG width={20} height={20} src={"imgs/arrow-right-up.svg"} />
          </Link>
          <Link href={"https://mask.io"} target="_blank" className="list-item">
            <div className="inner">
              <span>Mask Extension</span> for X <p>(formerly Twitter)</p>
            </div>
            <SVG width={20} height={20} src={"imgs/arrow-right-up.svg"} />
          </Link>
          <Link
            href={"https://firefly.land"}
            target="_blank"
            className="list-item"
          >
            <span>Firefly App</span>{" "}
            <SVG width={20} height={20} src={"imgs/arrow-right-up.svg"} />
          </Link>
        </div>
      </div>

      <Link href={"/faq"} className="menu-item">
        FAQ
      </Link>
      <Link href={"https://mirror.xyz/nextid.eth"} className="menu-item">
        Community
      </Link>
      <Link
        href={"https://medium.com/@Next.ID?utm_source=nextid"}
        className="menu-item"
      >
        Blog
      </Link>
      <Link href={"/story"} className="menu-item">
        Our Story
      </Link>
    </div>
  );
}
