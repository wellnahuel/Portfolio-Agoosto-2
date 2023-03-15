import React from 'react';
//import images
import Image from "../assets/agosto-smaller.png"
//import icons
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"
//import type of animation
import { TypeAnimation } from "react-type-animation"
//import motion
import { motion } from "framer-motion"
//import variants
import { fadeIn } from "../variants"



const Banner = () => {
  return <section className='section' id="home">
    <div>
      {/* text */}
      <div className="flex-1 text-center font-secondary lg:text-left">
        <h1 className="text-[55px] font-bold leading-9 lg:text-[110px] ">
          AGUSTÍN ORIHUELA
        </h1>
        <div className='mb-6 text-4xl lg:text-6xl font-secondary font-semibold leading-[1]'>
          <span className='mr-4 text-white'>
            <TypeAnimation sequence={['Diseñador Grafico', 2000, 'Brand Manager', 2000]} speed={40} wrapper='span' repeat={Infinity} className="text-pink-500" />
          </span>

        </div>
        <p className="mb-8 max-w-lg mx-auto lg:mx-0">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
          <button className="btn btn-lg">Contactame</button>
          <a href="#" className="text-gradient btn-link"> Mi Portafolio</a>
        </div>
        {/* socials */}
        <div className="flex text-xl gap-x-6 max-w-max mx-auto lg:mx-0">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
      {/* image */}
      <div>
        <img src={Image} alt="" />
      </div>

    </div>
  </section>;
};

export default Banner;


//attention, the class 'section' is defined in the index.css: 
//py-8 lg:py-24 lg:h-screen flex items-center