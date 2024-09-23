'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import LogoImage from '../Assets/logo.svg';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { CircleChevronLeft, X } from 'lucide-react'; // Import icons for hamburger and close

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='sticky top-0 z-50 bg-gray-100/20 backdrop-blur-lg transition-all justify-between flex flex-row items-center py-10 px-10 sm:py-4 sm:px-4'>
            {/* eslint-disable react/no-unescaped-entities */}
            <a href="#"><Image src={LogoImage} alt='This is the logo image' width={100} height={100} className='hover:translate-x-2 transition-transform cursor-pointer' /></a>

            {/* Hamburger Menu for Mobile */}
            <div className='sm:hidden'>
                <button onClick={toggleMenu} className='text-black text-3xl'>
                    {isOpen ? <X width={40} height={40} className='hover:text-[#FD853A] transition hover:translate-x-2' /> : <CircleChevronLeft width={40} height={40} className='hover:text-[#0056F6] transition hover:translate-x-2' />}
                </button>
            </div>

            {/* Navigation Links */}
            <aside className={`${isOpen ? 'flex flex-col justify-center items-center text-center transition-all bg-white text-3xl ' : 'hidden'
                } sm:flex flex-col sm:flex-row gap-10 items-center justify-center sm:static absolute top-full left-0 w-full sm:w-auto bg-gray-100/90 sm:bg-transparent sm:p-0 p-4 transition-all`}>
                <ul className='list-none flex flex-col sm:flex-row justify-between gap-6 sm:gap-10'>
                    <li className='font-medium text-black cursor-pointer hover:translate-x-2 transition'>
                        <a href="#about" className="hover:underline hover:text-[#FD853A]">About</a>
                    </li>
                    <li className='font-medium text-black cursor-pointer hover:translate-x-2 transition'>
                        <a href="#projects" className="hover:underline hover:text-[#FD853A]">Projects</a>
                    </li>
                    <li className='font-medium text-black cursor-pointer hover:translate-x-2 transition'>
                        <a href="#skills" className="hover:underline hover:text-[#FD853A]">Skills</a>
                    </li>
                    <li className='font-medium text-black cursor-pointer hover:translate-x-2 transition'>
                        <a href="#resume" className="hover:underline hover:text-[#FD853A]">Resume</a>
                    </li>
                </ul>

                {/* Let's Talk Button */}
                <a
                    href="mailto:sherlockx90@gmail.com"
                    className='mt-4 sm:mt-0 bg-[#0056F6] sm:py-3 py-4 px-8 sm:px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A] hover:bg-black'
                >
                    Let's Talk
                </a>
            </aside>
        </nav>
    );
};

export default NavBar;