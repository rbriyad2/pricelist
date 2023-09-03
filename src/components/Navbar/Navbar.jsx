import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'



const Navbar = () => {
    const [navbar, setNavbar]= useState(true)

    return (
        <div>
            <nav className="bg-violet-500 py-2">
            <div className="md:hidden" onClick={()=>(setNavbar(!navbar))}>
                <span>
                    {
                    navbar===true? <Bars3Icon className="h-12 w-12 text-blue-500" />: 
                    <XMarkIcon className="h-12 w-12 text-blue-500"></XMarkIcon>
                    }
                </span>
             
            </div>
                
            
           <ul className={`md:flex absolute md:static duration-500 px-4 bg-violet-500 ${!navbar  ? "top-11" : "-top-48"}`}>
                <li className='mr-2 text-white font-medium	text-xl hover:bg-purple-800 px-3'><a href="/home">Home</a></li>
                <li className='mr-2 text-white font-medium	text-xl hover:bg-purple-800 px-3'><a href="/about">About</a></li>
                <li className='mr-2 text-white font-medium	text-xl hover:bg-purple-800 px-3'><a href="/service">Service</a></li>
                <li className='mr-2 text-white font-medium	text-xl hover:bg-purple-800 px-3'><a href="/portfolio">Portfolio</a></li>
                <li className='mr-2 text-white font-medium	text-xl hover:bg-purple-800 px-3'><a href="/contact">Contact</a></li>
            </ul> 
            </nav>
        </div>
    );
};

export default Navbar;