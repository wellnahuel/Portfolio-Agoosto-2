import React from 'react';

//import counter
import CountUp from "react-countup"
//import intersection observer hook
import { useInView } from "react-intersection-observer"
//import motion
import { motion } from "framer-motion"
//import variant
import { fadeIn } from "../variants"



const About = () => {

  /* esto es para que react intersection observer funcione */
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return <section className='section' id="about" ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* image */}
        <motion.divdiv variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          {/* right here the image is apply from the tailwind.config file */}
        </motion.divdiv>
        {/* text */}
        <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}  className='flex-1'>
          <h2 className='h2 text-accent'>Sobre mi</h2>
          <h3 className='h3 mb-4'>Soy un diseñador grafico freelance con más de 10 años de experiencia.</h3>
          <p className='mb-6'>
            Lorem ipsum d Lorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum dLorem ipsum d
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                { inView ? <CountUp start={0} end={12} duration={3} /> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Años de <br />
                Experiencia
              </div>
            </div>
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                { inView ? <CountUp start={0} end={100} duration={3} /> : null }
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Proyectos <br />
                Completados
              </div>
            </div>
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                { inView ? <CountUp start={0} end={1000} duration={3} /> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Clientes <br />
                Satisfechos
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contáctame</button>
            <a href="#" className='text-gradient btn-link'>
              Mi Portafolio
            </a>
          </div>
          
        </motion.div>
      </div>

    </div>
  </section>;
};

export default About;

//attention, the class 'section' is defined in the index.css: 
//py-8 lg:py-24 lg:h-screen flex items-center

//https://www.npmjs.com/package/react-countup
//https://www.npmjs.com/package/react-intersection-observer

//the 3 values of flex are : flex-grow | flex-shrink | flex-basis

// flex grow The flex-grow CSS property sets the flex grow factor of a flex item's main size.

//The flex-shrink (contraccion) CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.

//The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.

//mix-blend-mode The mix-blend-mode CSS property sets how an element's content should blend with the content of the element's parent and the element's background.