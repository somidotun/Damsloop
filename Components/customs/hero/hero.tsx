import { Button } from "@/Components/ui/button";
import "@/app/globals.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import pythonProgramming from "@/public/image/python.jpg";
import { GoPeople } from "react-icons/go";

const Hero = () => {
  return (
    <section>
      <div
        className="flex flex-col md:flex-row gap-9 md:gap-5 lg:gap-9 
         dark:bg-[#0E1115] transition: all 0.3s ease;
          px-4  md:px-8 lg:px-12 pt-14 pb-10 lg-16"
      >
        {/* text */}
        <div className="md:w-[50%] flex flex-col gap-5">
          <p
            className="bg-white dark:bg-[#1C182C] text-[#8D52E0] 
             rounded-2xl px-2 py-1 w-56 text-sm border border-[#261d48]"
          >
            {">"} FREE PYTHON FELLOWSHIP
          </p>

          <h1
            className=" text-4xl md:text-5xl lg:text-6xl
           w-full md:w-[80%] "
          >
            Learn Python with the{" "}
            <span
              className=" text-transparent bg-clip-text 
             bg-linear-to-r from-[#974FD7] via-[#D73D91] to-[#F07135]"
            >
              Damsloop Fellowship
            </span>
          </h1>

          <p className=" dark:text-gray-500 w-full md:md:w-[85%] lg:w-[70%] ">
            A 6-week beginner-friendly program where you learn Python
            fundamentals, solve coding challenges,and build mini-projects in a
            supportive online community.
          </p>

          <div
            className="flex flex-row justify-center md:justify-start
           gap-4 w-full"
          >
            <Button
              className="bgColor scale text-white 
             px-6 py-4"
            >
              Apply Now <FaArrowRight className="h-5 w-5" />
            </Button>

            <Button
              className="border-2 scale border-[#8D52E0] text-[#8D52E0]
             px-6 py-4"
            >
              <GoPeople /> Join Community
            </Button>
          </div>
        </div>

        {/* image */}
        <div className="md:w-[50%]">
          <div
            className="relative w-full pt-5 h-80 md:h-108 
           rounded-2xl shadow-xl dark:shadow-[#231C38]"
          >
            <Image
              src={pythonProgramming}
              alt="python Programming"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
