import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { scrollPartners } from "@/utils/constants";

export default function Hero() {
  return (
    <div className="hero">
      <div className="float-banner">
        Experience Next.ID with{" "}
        <Link href={"https://web3.bio"} target="_blank">
          Web3.bio
        </Link>{" "}
        or{" "}
        <Link href={"https://mask.io"} target="_blank">
          Mask Extension
        </Link>
      </div>
      <Image
        className="hero-image"
        src={"/imgs/hero-image.svg"}
        width={761}
        height={763}
        alt="hero"
      />
      <div className="hero-content">
        <div className="hero-title">{"Bridge Users'"}</div>
        <div
          className="hero-title"
          style={{
            color: "#55B8FF",
          }}
        >
          Wallet Address
        </div>
        <div className="hero-title">For Mass Adoption</div>
        <div className="sub-title">
          Plug in the largest identity graph across Web2 and Web3 <br /> in 5
          seconds.
        </div>
        <div className="btn-group">
          <Link
            href={"https://cgs3aixtxgl.typeform.com/to/byvR85PL"}
            target="_blank"
          >
            <Button
              variant="primary"
              style={{
                textDecoration: "underline",
              }}
            >
              {"LET'S TALK"}
              <Image
                width={20}
                height={20}
                src="imgs/arrow-right-up.svg"
                alt=""
              />
            </Button>
          </Link>
          <Link
            href={"https://docs.next.id/?utm_source=nextid"}
            target="_blank"
          >
            <Button variant="secondary">
              DOCS
              <Image
                width={20}
                height={20}
                src="imgs/arrow-right-up.svg"
                alt=""
              />
            </Button>
          </Link>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="slide">
          {scrollPartners.map((x, idx) => {
            return (
              <Link href={x.link} key={x.name + idx}>
                <img className="icon" src={x.img} alt="" />
              </Link>
            );
          })}
        </div>
        <div className="slide">
          {scrollPartners.map((x, idx) => {
            return (
              <Link href={x.link} key={x.name + idx}>
                <img className="icon" src={x.img} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
