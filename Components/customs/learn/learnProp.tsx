"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  icon: string;
  alt: string;
  heading: string;
  discription: string;
  delay: number;
};

const LearnProp = ({ heading, discription, icon, alt, delay }: Props) => {
  // animation

  const item1 = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      variants={item1}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-3 dark:bg-[#15181E]
     border dark:border-gray-500 p-3 w-full md:w-48  
     lg:w-[16rem] rounded-2xl "
    >
      <div>
        <Image src={icon} alt={alt} className="w-8 h-8" />
      </div>

      <h1 className="font-semibold">{heading}</h1>

      <p className="dark:text-gray-500 text-sm">{discription}</p>
    </motion.section>
  );
};

export default LearnProp;
