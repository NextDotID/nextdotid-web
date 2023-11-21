import Link from "next/link";
import Image from "next/image";
import SVG from "react-inlinesvg";
import Button from "@/component/Button";
export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="content">
        <div className="title">Whoops!</div>
        <div>
          Looks like this page went on a vacation. Don’t get lost in cyberspace
          by trying one of these links.
        </div>
        <Link
          className="link"
          href={"https://docs.next.id/"}
          target="_blank"
        >
          LEARN MORE ABOUT NEXT.ID
          <SVG width={24} height={24} src={"imgs/arrow-right.svg"} />
        </Link>
        <Link
          href={"https://medium.com/@Next.ID"}
          target="_blank"
          className="link"
        >
          BLOG
          <SVG width={24} height={24} src={"imgs/arrow-right.svg"} />
        </Link>
        <Button variant="primary">
          <Link href={"/"}>TAKE ME HOME</Link>{" "}
          <SVG width={24} height={24} src="imgs/arrow-right.svg" />
        </Button>
      </div>
     
        <img className="img-404" src="imgs/404.svg" alt="" />
        <img className="img-bg" src="imgs/404-bg.svg" alt="" />
    </div>
  );
}
