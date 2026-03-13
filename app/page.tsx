import About from "@/Components/customs/about/about";
import Hero from "@/Components/customs/hero/hero";
import Learn from "@/Components/customs/learn/learn";
import Navbar from "@/Components/customs/nav/navbar";

export default function Home() {
  return (
    <main className=" ">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* about  */}
      <About />
      {/* what you will learn */}
      <Learn />
    </main>
  );
}
