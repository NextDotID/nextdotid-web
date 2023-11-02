import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="dropdown">
        <div className="menu-item dropdown-toggle">
          Products{" "}
          <Image width={20} height={20} src={"imgs/arrow-down.svg"} alt="" />{" "}
        </div>
        <ul className="list">
          <li className="list-item">
            Universal Profile SDK{" "}
            <Image
              width={24}
              height={24}
              src={"imgs/arrow-right-up.svg"}
              alt=""
            />
          </li>
          <li className="list-item">
            Web3 Bio{" "}
            <Image
              width={24}
              height={24}
              src={"imgs/arrow-right-up.svg"}
              alt=""
            />
          </li>
          <li className="list-item">
            Mask Extension for X{" "}
            <Image
              width={24}
              height={24}
              src={"imgs/arrow-right-up.svg"}
              alt=""
            />
          </li>
          <li className="list-item">
            Firefly App{" "}
            <Image
              width={24}
              height={24}
              src={"imgs/arrow-right-up.svg"}
              alt=""
            />
          </li>
        </ul>
      </div>

      <Link href={'/faq'} className="menu-item">FAQ</Link>
      <Link href={'https://mirror.xyz/nextid.eth'} className="menu-item">Community</Link>
      <Link href={'https://medium.com/@Next.ID?utm_source=nextid'} className="menu-item">Blog</Link>
      <Link href={'/story'} className="menu-item">Our Story</Link>

    </div>
  );
}
