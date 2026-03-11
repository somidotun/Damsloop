import Link from "next/link";
import React from "react";

type Props = {
  id: number;
  link: string;
  name: string;
};

const Navlist = () => {
  const navs: Props[] = [
    { id: 1, link: "#About", name: "About" },
    { id: 1, link: "#Curriculum", name: "Curriculum" },
    { id: 1, link: "#HowItWorks", name: "How it works" },
    { id: 1, link: "#Cohorts", name: "Cohorts" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 text-gray-500 w-full">
      {navs.map((nav) => (
        <div
          className="md:hover:dark:text-white  md:hover:text-black "
          key={nav.id}
        >
          <Link href={nav.link}>{nav.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navlist;
