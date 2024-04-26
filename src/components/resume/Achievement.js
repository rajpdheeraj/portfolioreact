import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="WordPress Web Development"
            subTitle="Freelance - (2020 - Present)"
            result="USA"
            des="Freelance's hiring process is an important part of our culture. Freelance care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Full Stack Development"
            subTitle="Fiverr - (2023 - Present)"
            result="Fiverr"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Fiverr isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Upwork - (2020 - Present)"
            result="Upwork"
            des="The Upwork economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="WordPress Web Development"
            subTitle="Freelance - (2020 - Present)"
            result="USA"
            des="Freelance's hiring process is an important part of our culture. Freelance care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Full Stack Development"
            subTitle="Fiverr - (2023 - Present)"
            result="Fiverr"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Fiverr isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Upwork - (2020 - Present)"
            result="Upwork"
            des="The Upwork economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
