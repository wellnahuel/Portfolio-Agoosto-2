import React from 'react';
//import motion
import { motion } from "framer-motion"
//import variant
import { fadeIn } from "../variants"



const Contact = () => {
  return (
    <div className='py-16 lg:section' id="contact">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:mt-[750px]'>
          {/* text */}
          <motion.div variants={fadeIn('rigth', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex justify-start items-center'>
            <div >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Escribime</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Trabajemos <br /> juntos!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder="Tu nombre" />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder="Tu email" />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Tu mensaje'></textarea>
            <button className='btn btn-lg'>Enviar mensaje</button>
          </motion.form>
        </div>

      </div>
    </div>
  );
};

export default Contact;


//attention, the class 'section' is defined in the index.css: 
//py-8 lg:py-24 lg:h-screen flex items-center