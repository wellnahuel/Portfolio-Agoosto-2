import React from 'react';
//import icon
import { BsSuitHeart } from 'react-icons/bs'
import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl'

const Footer = () => {
    return <div className="flex flex-column justify-center lg:mt-[540px]">
        Con&ensp;<BsSuitHeart className='mt-1' />&ensp;wellnahuel - 2023
        <div className=' ml-3 mt-1 flex'>
            <a href="https://www.linkedin.com/in/nahuelcittadino/"><SlSocialLinkedin className='mr-4' /></a>
            <a href="https://github.com/wellnahuel"><SlSocialGithub /></a>
        </div>
    </div>;
};

export default Footer;