import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Physics Honours"
            subTitle="Babasaheb Bhimrao Ambedkar Bihar University (BRABU) Muzaffarpur, Bihar, India. (2020 - 2023)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Science"
            subTitle="Senior Secondary School Dhaka, Bihar, India. (2018 - 2020)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="High School Dhaka, East Champaran, Bihar, India. (2017 - 2018)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="WordPress Web Development"
            subTitle="Freelance - (2020 - Present)"
            result="India"
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

export default Experience;
