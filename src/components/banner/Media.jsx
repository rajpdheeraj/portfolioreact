import React from 'react'
import {  FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiWordpress, SiJavascript, SiCss3 } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.instagram.com/dheerajrpd/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              
            </span>
            <span className="bannerIcon">
            <a href="https://twitter.com/rajpdheeraj" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/raj-p-dheeraj/' target='_blank'><FaLinkedinIn /></a>
              
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiWordpress />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media