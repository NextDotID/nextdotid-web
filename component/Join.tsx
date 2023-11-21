import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

export default function Join() {
  return (
    <div className="join">
      <div className="title">
        Want more information? Get in touch with our team or join
        <br />{" "}
        <Link
          style={{
            textDecoration: "underline",
          }}
          href="https://t.me/NextDotIDofficial"
          target="_blank"
        >
          our Community
        </Link>{" "}
        on Telegram
      </div>
      <Button variant="third">
        VIEW DEVELOPER DOCS{" "}
        <Image width={20} height={20} src="imgs/arrow-right-up.svg" alt="" />
      </Button>
    </div>
  );
}
