import Image from "next/image";
import Menu from "./Menu";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href={"/"}>
        <Image
          width={125}
          height={32}
          className="logo"
          src="imgs/logo.svg"
          alt="next.id logo"
        />
      </Link>
      <Menu />
      <Link href={"https://mask.io"} target="_blank">
        <Button variant="primary">
          MASK NETWORK
          <Image width={20} height={20} src="imgs/arrow-right.svg" alt="" />
        </Button>
      </Link>
      <Link href={"https://web3.bio/"} target="_blank">
        <Button variant="secondary">
          WEB3.BIO
          <Image width={20} height={20} src="imgs/arrow-right-up.svg" alt="" />
        </Button>
      </Link>
    </div>
  );
}
