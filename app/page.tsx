import Comments from "@/component/Comments";
import Hero from "@/component/Hero";
import Partners from "@/component/Partners";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Partners/>
      <Comments/>
    </main>
  );
}
