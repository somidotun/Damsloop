"use client";
import "@/app/globals.css";
import { motion } from "framer-motion";

interface TimelineItem {
  id: number;
  title: string;
  description: string;
}

const programs: TimelineItem[] = [
  {
    id: 1,
    title: "6-Week Learning Cycle",
    description:
      "Structured weekly modules to build your skills progressively.",
  },
  {
    id: 2,
    title: "Weekly Coding Challenges",
    description: "Practice problems to reinforce each week's concepts.",
  },
  {
    id: 3,
    title: "Mini-Projects",
    description: "Build real applications to solidify your learning.",
  },
  {
    id: 4,
    title: "Community Support",
    description: "Get help from mentors and fellow learners.",
  },
  {
    id: 5,
    title: "Advance to Sodbridge Academy",
    description: "Top fellows get opportunities to continue learning.",
  },
];

export default function Timeline() {
  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="dark:bg-[#0E1115] flex items-center
       flex-col gap-7 py-7 px-4  md:px-8 lg:px-12 transition: all 0.3s ease-in-out"
    >
      <h1 className="text-4xl md:text-5xl font-bold">How the program works</h1>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:gap-8">
        {programs.map((program) => (
          <div key={program.id} className="flex flex-row gap-3">
            <p
              className="flex justify-center items-center
              h-10 w-10 rounded-full bgColor text-white"
            >
              {program.id}
            </p>

            <div>
              <h1 className="font-bold">{program.title}</h1>
              <p className="dark:text-gray-500">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
