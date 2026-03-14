import About from "@/Components/customs/about/about";
import Cohorts from "@/Components/customs/Cohorts/Cohorts";
import Hero from "@/Components/customs/hero/hero";
import Learn from "@/Components/customs/learn/learn";
import Navbar from "@/Components/customs/nav/navbar";
import Timeline from "@/Components/customs/timeline/program";

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

      {/* timeline */}
      <Timeline />

      {/* Cohorts */}
      <Cohorts />
    </main>
  );
}
