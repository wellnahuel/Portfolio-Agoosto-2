import React from 'react';

//import icon
import { BsArrowUpRight } from "react-icons/bs"
//import motion
import { motion } from "framer-motion"
//import variants
import { fadeIn } from "../variants"

//services data

const services = [
  {
    name: "Creador de branding",
    description: "Lorem dolor sit amet con minim ven minim veniam ut lab. Trerteproeproeporperpo",
  },
  {
    name: "Contenido Multimedia",
    description: "Lorem dolor sit amet con minim ven minim veniam ut lab. Trerteproeproeporperpo"
  },
  {
    name: "Arte publicitario",
    description: "Lorem dolor sit amet con minim ven minim veniam ut lab. Trerteproeproeporperpo"
  },
  {
    name: "Diseño de producto",
    description: "Lorem dolor sit amet con minim ven minim veniam ut lab. Trerteproeproeporperpo"
  },
]

const Services = () => {
  return <section className='section' id="services">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:mt-[200px]'>
        {/* text and image */}
        <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blends-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>Que es lo que hago?</h2>
          <h3 className='h3  max-w-[455px] mb-16'>
            Soy un diseñador grafico freelance con más de 10 años de experiencia.
          </h3>
          <button className='btn btn-sm'>Mis proyectos</button>
        </motion.div>
        {/* services */}
        <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
          {/* services list */}
          {services.map((service, index) => {
            //destructure services
            const { name, description } = service;
            return (
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className=" text-xl tracking-wider font-primary font-semibold mb-6">
                    {name}
                  </h4>
                  <p className='font-secondary leading-tight'>
                    {description}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

    </div>
  </section>;
};

export default Services;


//attention, the class 'section' is defined in the index.css: 
//py-8 lg:py-24 lg:h-screen flex items-center