import Comments from "@/component/Comments";
import Hero from "@/component/Hero";
import Join from "@/component/Join";
import Partners from "@/component/Partners";
import Web3bio from "@/component/Web3bio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Web3bio/>
      <Join/>
      <Partners/>
      <Comments/>
    </main>
  );
}
