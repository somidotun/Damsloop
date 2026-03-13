import { Button } from "@/Components/ui/button";
import "@/app/globals.css";
import Navlist from "./navlist";
import { MdOutlineCancel } from "react-icons/md";
import { useOpenHamburgerMenu } from "@/store/openHamburger";
import { motion } from "framer-motion";

const MobileNav = () => {
  // animations
  const variant1 = {
    // initial
    hidden: {
      opacity: 0,
      x: "100vw",
    },

    // animate
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // open menu bar
  const { toggle } = useOpenHamburgerMenu();
  return (
    <motion.div
      variants={variant1}
      initial="hidden"
      animate="visible"
      className=" flex flex-col w-full gap-4 fixed top-0 
       bottom-0"
    >
      <div className="flex justify-end" onClick={toggle}>
        <MdOutlineCancel className=" h-8 w-8" />
      </div>
      <Navlist />

      {/* buttton */}
      <div className="w-full">
        <Button className="bgColor w-full text-white text-base scale">
          Apply Now
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileNav;
