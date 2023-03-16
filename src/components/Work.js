import React from 'react';
//import motion
import { motion } from "framer-motion"
//import variant
import { fadeIn } from "../variants"
// import image
import Img1 from "../assets/1.jpg"
import Img2 from "../assets/2.jpg"
import Img3 from "../assets/3.jpg"
import Img4 from "../assets/4.png"





const Work = () => {
  return (
    <section className='section' id="work">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mis ultimos <br />
                Trabajos.
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat null
              </p>
              <button className='btn btn-sm'>Ver todos los proyectos</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Algun pretitulo
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Titulo del proyecto</span>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-y-14'>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Algun pretitulo
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Titulo del proyecto</span>
              </div>
              {/* image */}
              
            </div>
          </div>
        </div>
      </div>
    </section>)
    ;
};

export default Work;


//attention, the class 'section' is defined in the index.css: 
//py-8 lg:py-24 lg:h-screen flex items-center