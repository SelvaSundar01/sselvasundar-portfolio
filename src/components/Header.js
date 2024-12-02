import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

import selvaicon from '../assests/selva.jpg'

export default function Header(){
   
    const [toggleMenu, setToggleMenu]=useState(false);
    return <>
    <header className="flex justify-between px-6 bg-primary">
        <img className='w-[40px] relative'  src={selvaicon} /><span className='absolute left-14 top-3  font-semibold tracking-widest'> <span className='text-gray-700 font-extrabold tracking-widest'>E</span>
        <span className='text-yellow-600 font-extrabold tracking-widest'>L</span>
        <span className='text-gray-700 font-extrabold tracking-widest'>V</span>
        <span className='text-yellow-600 font-extrabold tracking-widest'>A</span></span>
        
        <nav className="hidden md:block">
        <ul className="flex ">
            <li className="text-yellow-600 underline underline-offset-4 -tracking-tighter "><a href="#">HOME</a></li>
            <li className='hover:underline hover:decoration-yellow-600 underline-offset-4 -tracking-tighter'><a href="#about">ABOUT</a></li>
            <li className='hover:underline  hover:decoration-yellow-600 underline-offset-4 -tracking-tighter'><a href="#skills">SKILLS</a></li>
            <li className='hover:underline  hover:decoration-yellow-600 underline-offset-4 -tracking-tighter'><a href="#project">PROJECTS</a></li>
            <li className='hover:underline  hover:decoration-yellow-600 underline-offset-4 -tracking-tighter'><a href="#resume">RESUME</a></li>
            <li className='hover:underline  hover:decoration-yellow-600 underline-offset-4 -tracking-tighter'><a href="#contact">CONTACT</a></li>
         
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden   ">
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col  text-black mobile-nav z-10  ">
            <li className="text-yellow-600 underline underline-offset-4 hover: py-2"><a href="#">HOME</a></li>
            <li className='transform hover:translate-y-1 hover: hover: py-2 -tracking-tighter'><a href="#about">ABOUT</a></li>
            <li className='transform hover:translate-y-1 hover: py-2 -tracking-tighter'><a href="#skills">SKILLS</a></li>
            <li className='transform hover:translate-y-1 hover: py-2 -tracking-tighter'><a href="#project">PROJECTS</a></li>
            <li className='transform hover:translate-y-1 hover: py-2 -tracking-tighter'><a href="#resume">RESUME</a></li>
            <li className='-tracking-tighter transform hover:translate-y-1 '><a href="#contact">CONTACT</a></li>
        
        </ul>
        </nav>} 
               <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden  '><Bars3Icon className='text-black h-5 '/></button>

       
       
    </header>
    
    </>
}