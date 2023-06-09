import React from 'react';
//import motion
import { motion } from "framer-motion"
//import variant
import { fadeIn } from "../variants"
// import image
import Img1 from "../assets/1_crop_resize.png"
import Img2 from "../assets/2_crop.png"
import Img3 from "../assets/3_crop_resize.png"
//import Img4 from "../assets/4_resize.png"

const Work = () => {
  return (
    <section className='section' id="work">
      <div className='container mx-auto'>
        <div className='flex flex-col gap-x-10 lg:flex-row lg:mt-[750px]'>
          <motion.div variants={fadeIn('rigth', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10'> {/* Titulo + descripcion + boton + 1er card */}
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mis ultimos Trabajos. <br />
                {/* Trabajos. */}
              </h2>
              {/*  <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat null
              </p> */}
              <button className='btn btn-sm'>Ver todos los proyectos</button>
            </div>
            {/* card */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>You have to try it</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Carta Las Gringas</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-10'> {/* segunda columna */}
            {/* card */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl"> {/* 2nd card */}
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Gin Frutos Rojos
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Boticario</span>
              </div>
              {/* image */}
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl"> {/* 3rd card */}
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={Img3} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Packaging</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl lg:text-3xl text-white'>Cerveza Sandia Summer</span>
              </div>
              {/* image */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;


//attention, the class 'section' is defined in the index.css: 
//py-8 lg:py-24 lg:h-screen flex items-center

