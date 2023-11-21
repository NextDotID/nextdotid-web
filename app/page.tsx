import Apps from "@/component/Apps";
import Comments from "@/component/Comments";
import Counts from "@/component/Counts";
import Hero from "@/component/Hero";
import Join from "@/component/Join";
import Partners from "@/component/Partners";
import Web3bio from "@/component/Web3bio";
import Cases from "@/component/Cases";
import Identity from "@/component/Identity";

export default function Home() {
  return (
    <div
      className="h-min-screen"
      style={{
        width: "100%",
      }}
    >
      <Hero />
      <Apps />
      <Counts />
      <Cases />
      <Web3bio />
      <Identity />
      <Join />
      <Partners />
      <Comments />
    </div>
  );
}
