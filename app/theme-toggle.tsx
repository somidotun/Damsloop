"use client";

import { Button } from "@/Components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  // animation variant
  const variant1 = {
    // initial
    hidden: {
      rotate: 0,
    },

    // animate
    visible: {
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
  };

  //   variant 2
  const variant2 = {
    // initial
    hidden: {
      rotate: 0,
    },

    // animate
    visible: {
      rotate: -360,
      transition: {
        duration: 0.5,
      },
    },
  };

  // theme
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full hover:cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <motion.div
          variants={variant1}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center"
        >
          <FaSun
            className="h-7 w-7
             text-black dark:text-white"
          />
        </motion.div>
      ) : (
        <motion.div
          variants={variant2}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center"
        >
          <FaMoon
            className="h-7 w-7
             text-black dark:text-white"
          />
        </motion.div>
      )}
    </Button>
  );
};

export default ThemeToggle;
