import React, { useState } from 'react'
import Logo from '../../assets/icons/logo.svg';
import { Nav } from './Nav';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className='container mx-auto py-[1rem]'>
        <div className='grid grid-cols-12 items-center'>
          <a href="/" className='col-span-6 md:col-span-4'>
            <img src={Logo} className='logo h-[clamp(40px,32.1053px+2.4671vw,70px)]' alt='Logo'/>
          </a>
          
          <Nav className="hidden md:block navbar justify-items-end col-span-8"/>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 h-10 p-2 rounded-md focus:outline-none justify-items-end md:hidden col-span-6"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  )
}
