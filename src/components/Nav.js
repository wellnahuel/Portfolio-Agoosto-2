import React from 'react';

//import icons 
import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
//import link
import { Link } from 'react-scroll';


const Nav = () => {
  return (
    <nav className= "fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className='w-full bg-black/20  h-[66px] backdrop-blur-2xl rounded-full max-w-md mx-auto px-5 flex justify-between text-2xl text-white/50'>
          <Link to="home" activeClass='active' smooth={true} spy={true} className="cursor-pointer w-16 h-16 flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link to="about" activeClass='active' smooth={true} spy={true} className="cursor-pointer w-16 h-16 flex items-center justify-center">
            <BiUser />
          </Link>
          <Link to="services" activeClass='active' smooth={true} spy={true} className="cursor-pointer w-16 h-16 flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link to="work" activeClass='active' smooth={true} spy={true} className="cursor-pointer w-16 h-16 flex items-center justify-center">
            <BsBriefcase />
          </Link>
          <Link to="contact" activeClass='active' smooth={true} spy={true} className="cursor-pointer w-16 h-16 flex items-center justify-center">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

//backdrop-blur-2x1 is a filter
//overflow-hidden is hoy the data show

//smooth scroll behavior in css : scroll-behavior: smooth;
//buy here in tailwind is just with : smooth={true}

//scrollspy is just with : spy={true}
