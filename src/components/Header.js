import React from 'react';
//import images 
import Logo from "../assets/Sun.png"

const Header = () => {
  return <header className=' py-8'>
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="" className="w-12"></img>
        </a>
        <button className="btn btn-sm"> Trabaja conmigo </button>
      </div>
    </div>
  </header>;
};

export default Header;
