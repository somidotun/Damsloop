import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  alt: string;
  heading: string;
  discription: string;
};

const LearnProp = ({ heading, discription, icon, alt }: Props) => {
  return (
    <section
      className="flex flex-col gap-3 dark:bg-[#15181E]
     border dark:border-gray-500 p-3 w-full md:w-[12rem]  
     lg:w-[16rem] rounded-2xl "
    >
      <div>
        <Image src={icon} alt={alt} className="w-8 h-8" />
      </div>

      <h1>{heading}</h1>

      <p className="dark:text-gray-500">{discription}</p>
    </section>
  );
};

export default LearnProp;
