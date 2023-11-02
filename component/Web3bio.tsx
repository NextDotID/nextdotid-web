import Image from "next/image";
import Button from "./Button";

export default function Web3bio() {
  return <div className="web3bio">
    <div className="main">
      <div className="title">Web3.Bio</div>
      <div className="subtitle">
        Search your ENS, Twitter handle, and 10+ profiles on Web.bio and see how
        Next.ID Relation Service empowers next-gen link-in-bio too
      </div>
      <Button variant="forth">
        VISIT WEB3.BIO{" "}
        <Image width={20} height={20} src="imgs/arrow-right-up.svg" alt="" />
      </Button>
    </div>
    <img className="cover" src="imgs/web3bio.svg" alt="" />
  </div>
}
