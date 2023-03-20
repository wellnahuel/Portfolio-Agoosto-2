import React from 'react';
//import images
import Image from "../assets/agosto-circle.png"
//import icons
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"
//import type of animation
import { TypeAnimation } from "react-type-animation"
//import motion
import { motion } from "framer-motion"
//import variants
import { fadeIn } from "../variants"

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id="home">
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
        {/* text */}
        <div className="flex-1 text-center font-secondary lg:text-left"> {/* left part */}
          <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="text-[55px] font-bold leading-[0.8] lg:text-[110px] ">
            AGUSTÍN ORIHUELA
          </motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-4xl lg:text-6xl font-secondary font-semibold leading-[1]'>
            <span className='mr-4 text-white'>
              <TypeAnimation sequence={['Diseñador Grafico', 2000, 'Brand Manager', 2000]} speed={40} wrapper='span' repeat={Infinity} className="text-pink-500" />
            </span>
          </motion.div>
          <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mb-8 max-w-lg mx-auto lg:mx-0">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </motion.p>
          <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <button className="btn btn-lg">Contactame</button>
            <a href="#" className="text-gradient btn-link"> Mi Portafolio</a>
          </motion.div>
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
        {/* image , rigth part */}
        <motion.div variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="hidden lg:flex flex-1 max-w-xs lg:max-w-[482px]">
          <img src={Image} alt="" />
        </motion.div>

      </div>
    </div>
  </section>;
};

export default Banner;

//attention, the class 'section' is defined in the index.css: 
//py-8 lg:py-24 lg:h-screen flex items-center

/* 
animation fade

 <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className="text-[55px] font-bold leading-[0.8] lg:text-[110px] ">
            AGUSTÍN ORIHUELA
          </motion.h1>
*/