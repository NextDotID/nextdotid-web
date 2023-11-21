import { scrollPartners } from "@/utils/constants";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="partners">
      <div className="title">
        Meet our <span>Partners</span>
      </div>
      <div className="subtitle">
        Discover the strength of our network through our dedicated partners.
      </div>
      <div className="icons">
        {scrollPartners.map((x) => {
          return (
            <Link key={`colored_${x.name}`} href={x.link} target="_blank">
              <img src={x.coloredImg} className="icon" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
