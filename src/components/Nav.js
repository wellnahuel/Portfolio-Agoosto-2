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
        <div className='w-full bg-black/20 h-24 backdrop-blur-2xl rounded-full max-w-md mx-auto px-5 flex justify-between text-2xl text-white/50'>
          <Link className="cursor-pointer w-15 h-15 flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link className="cursor-pointer w-15 h-15 flex items-center justify-center">
            <BiUser />
          </Link>
          <Link className="cursor-pointer w-15 h-15 flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link className="cursor-pointer w-15 h-15 flex items-center justify-center">
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

//backdrop-blur-2x1 is a filter
//overflow-hidden is hoy the data show
