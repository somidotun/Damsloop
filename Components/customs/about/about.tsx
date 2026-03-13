"use client";
import AboutProps from "./aboutProps";
import book from "@/public/icon/book-open.svg";
import code from "@/public/icon/code-xml.svg";
import file from "@/public/icon/file-braces-corner.svg";
import heart from "@/public/icon/heart-handshake.svg";
import user from "@/public/icon/users.svg";
import { motion } from "framer-motion";

const About = () => {
  // animation

  const item1 = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.6,
      },
    },
  };

  const item2 = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  const item3 = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  };

  const item4 = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.6,
      },
    },
  };

  const item5 = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      className="flex flex-col md:items-center w-full pt-5 pb-6 
     gap-8 dark:bg-[#0E1115]  transition: all 0.3s ease  lg:pt-7
      px-4  md:px-8 lg:px-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold">About the Fellowship</h1>

      <p className="w-full md:w-[80%] lg:w-[60%] md:text-center dark:text-gray-500">
        Damsloop Python Fellowship is a free community learning initiative by
        Sodbridge Ltd designed to help beginners develop programming skills
        through structured lessons, coding challenges, and hands-on
        mini-projects.
      </p>

      <div
        className="flex items-center gap-4 flex-wrap
       md:flex-nowrap md:overflow-y-hidden"
      >
        {/* book */}
        <motion.div
          variants={item1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AboutProps icon={book} alt="Book Icon" text="Structured lessons" />
        </motion.div>

        {/* code */}
        <motion.div
          variants={item2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AboutProps icon={code} alt="Code Icon" text="Coding challenges" />
        </motion.div>

        {/* file */}
        <motion.div
          variants={item3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AboutProps icon={file} alt="File Icon" text="Hands-on projects" />
        </motion.div>

        {/* heart */}
        <motion.div
          variants={item4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AboutProps icon={heart} alt="Heart Icon" text="Mentorship support" />
        </motion.div>

        {/* user */}
        <motion.div
          variants={item5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {" "}
          <AboutProps icon={user} alt="User Icon" text="Community support" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
