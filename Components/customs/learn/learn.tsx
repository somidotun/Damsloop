import braces from "@/public/icon/braces.svg";
import git from "@/public/icon/git-fork.svg";
import square from "@/public/icon/square-function.svg";
import list from "@/public/icon/list.svg";
import file from "@/public/icon/file-text.svg";
import bot from "@/public/icon/bot.svg";
import globe from "@/public/icon/globe.svg";
import LearnProp from "./learnProp";

const Learn = () => {
  return (
    <section
      className="flex flex-col items-center gap-7
     dark:bg-[#111419] py-7 bg-[#f9f9f9cc]"
    >
      <h1 className="text-4xl md:text-5xl font-bold">what you will learn</h1>

      <div
        className="flex flex-col md:flex-row items-center md:flex-wrap 
         gap-5 w-full  md:w-[80%]  md:pl-7 lg:pl-24"
      >
        {/* braces */}
        <LearnProp
          icon={braces}
          alt="braces"
          heading="Python Fundamentals"
          discription="Variables,data types and syntax"
        />

        {/* git */}
        <LearnProp
          icon={git}
          alt="git"
          heading="Control flow & Loops"
          discription="if statement for/while loops"
        />

        {/* square */}
        <LearnProp
          icon={square}
          alt="square"
          heading="Functions"
          discription="Reusable code and modularity"
        />

        {/* list */}
        <LearnProp
          icon={list}
          alt="list"
          heading="Lists & Dictionaries"
          discription="Core data structures"
        />

        {/* file */}
        <LearnProp
          icon={file}
          alt="file"
          heading="Working with Files"
          discription="Read,write and process files"
        />

        {/* automation */}
        <LearnProp
          icon={bot}
          alt="bot"
          heading="Mini Automation"
          discription="Scripts to automate tasks"
        />

        <LearnProp
          icon={globe}
          alt="globe"
          heading="Using Simple APIs"
          discription="Fetch and use real-world data"
        />
      </div>
    </section>
  );
};

export default Learn;
