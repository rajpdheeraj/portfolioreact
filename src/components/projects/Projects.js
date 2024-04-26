import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, rajportfolio, pallet, comite } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="School Website"
          des=" Looking to create a professional and engaging website for your school? I specialize in developing school websites on Fiverr, helping educational institutions build a strong online presence."
          src={projectOne}
        />
        <ProjectsCard
          title="Lodge Website"
          des=" I specialize in creating high-quality, engaging websites specifically designed for responsive on Fiverr.  Whether you need a complete website build from scratch or a refresh of your existing one, I can help!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Immigration Website"
          des=" I work closely with you to understand your vision and ensure the final product meets your needs and exceeds your expectations."
          src={projectThree}
        />
        <ProjectsCard
          title="Portfolio Landing Page"
          des=" Clear and informative content that highlights your offerings and the surrounding area."
          src={rajportfolio}
        />
        <ProjectsCard
          title="Pallets Website"
          des=" Increase transparency, engagement, and collaboration with a custom website built for your Works Council."
          src={pallet}
        />
        <ProjectsCard
          title="Works Council Website"
          des=" Clear and concise communication: Ensure employees stay informed on important updates, agreements, and council activities."
          src={comite}
        />
      </div>
    </section>
  );
}

export default Projects