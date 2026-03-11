import About from "@/Components/customs/about/about";
import Hero from "@/Components/customs/hero/hero";
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
    </main>
  );
}
