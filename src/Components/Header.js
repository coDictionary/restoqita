import React from 'react'
import { useState } from 'react'
import './style.css'
import { Sling as Hamburger } from 'hamburger-react'

const Header = () => {

  window.addEventListener("scroll",()=>{
    const header = document.getElementById("header")
    header.classList.toggle("sticky", window.scrollY > 50)
  })

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='flex items-center py-10 px-52 fixed w-full transisi max-lg:p-4 max-xl:p-5 ' id='header'>
        <div className="logo">
            <h2 className='uppercase border-2 border-white px-2 py-1.5 text-2xl font-semibold cursor-pointer text-white max-xl:text-xl' >RestoQita</h2>
        </div>
        <nav className='ml-auto block max-md:hidden'>
            <ul className='flex gap-6 text-white font-medium'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#Menu">Menu</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        {/* Hamburger */}
        <div className="hidden max-lg:block ml-auto">
            <Hamburger toggled={isOpen} toggle={setIsOpen}  color ="white" direction={"right"} rounded size={30}
            />

            {isOpen ? (
            <>
                <ul className='absolute gap-6 w-full flex flex-col left-0 top-24 py-4 px-6 mt-2 bg-white ham-menu'>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#Menu">Menu</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </>):(<>
            
            </>)}
        </div>
    </header>
  )
}

export default Header