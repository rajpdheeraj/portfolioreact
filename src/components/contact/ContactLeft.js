import React from 'react'
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Dheeraj</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Experienced with all stages of the development cycle for dynamic web projects.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Whatsapp: <span className="text-lightText">+917301026534</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">dheeraj4330@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft