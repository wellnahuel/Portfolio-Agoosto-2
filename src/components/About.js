import React from 'react';

//import counter
import CountUp from "react-countup"
//import intersection observer hook
import { useInView } from "react-intersection-observer"
//import motion
import { motion } from "framer-motion"
//import variant
import { fadeIn } from "../variants"

//import image
import image_about from "../assets/AGOOSTO.png"



const About = () => {

  /* esto es para que react intersection observer funcione , seria lo de los contadores*/
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return <section className='section' id="about" ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col mb-[700px] gap-y-10 h-screen lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 lg:mt-[700px]'>
        {/* image */}
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
          {/* right here the image is apply from the tailwind.config file */}
          <img src={image_about} alt="" />
        </motion.div>
        {/* text */}
        <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
          <h2 className='h2 text-accent'>Sobre mi</h2>
          <h3 className='h3 mb-4'>Soy un diseñador grafico freelance con más de 10 años de experiencia.</h3>
          <p className='mb-6'>
            Me apasiona crear diseños visualmente impactantes que ayuden a las marcas a crecer. Tengo experiencia como diseñador gráfico autónomo y en equipo, y he trabajado en una larga lista de proyectos de diseño impreso, interactivo y digital.
            <br/>
            Me encanta colaborar con clientes y colegas, y me entusiasma ofrecer diseños que ayuden captar clientes y hacer crecer su mercado objetivo y alcance.
          </p>
          {/* stats */}
          <div className='gap-x-6 lg:flex-row lg:gap-x-10 mb-12'>
            <div>
              <div className='flex '>
                <div className='flex flex-row gap-x-16  lg:gap-x-80'>
                  <div className='flex flex-col'>
                    <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                      {/*  { inView ? <CountUp start={0} end={13} duration={3} /> : null } */}10
                    </div>
                    <div className='font-primary text-[12px] tracking-[2px]'>
                      Años de <br />
                      Experiencia
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                      {/* { inView ? <CountUp start={0} end={100} duration={3} /> : null } */}
                      +100
                    </div>
                    <div className='font-primary text-[12px] tracking-[2px]'>
                      Proyectos <br />
                      Completados
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid mt-3 justify-items-center'>
              <div className=' text-[40px] font-tertiary text-gradient mb-2'>
                {/*  { inView ? <CountUp start={0} end={1000} duration={3} /> : null } */} +500
              </div>
              <div className='font-primary text-[12px] tracking-[2px]'>
                Clientes <br />
                Satisfechos
              </div>
            </div>
          </div>
          <div className='flex gap-x-4 items-center'>
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

// esto estaba dentro de la className de la imagen bg-about bg-contain bg-no-repeat