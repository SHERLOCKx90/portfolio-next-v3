import React from 'react'
import Image from 'next/image'
import ProjectImg1 from '../Assets/ProjectImg1.png'
import ProjectImg2 from '../Assets/ProjectImg2.png'
import ProjectImg3 from '../Assets/ProjectImg3.png'
import bulb from '../Assets/bulb.png'


const Projects = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-0 items-center mx-20 sm:mx-60 max-w-screen h-fit sm:h-[100vh] sticky top-0 z-20 bg-white py-20 sm:py-0'>
            {/* eslint-disable react/no-unescaped-entities */}
            <div className='grid grid-cols-2 w-full sm:w-[40%] h-fit'>
                {/* <Image src={ProjectImg} alt='This is the image of projects' width={400} height={400} /> */}
                <Image src={ProjectImg1} alt='this is project image' width={300} height={300} className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-t-full hover:translate-y-2' />
                <Image src={ProjectImg2} alt='this is project image' width={300} height={300} className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-b-full hover:translate-y-2' />
                <Image src={ProjectImg3} alt='this is project image' width={300} height={300} className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-t-full hover:translate-y-2' />
            </div>
            <div className='sm:w-[60%] w-full h-fit flex flex-col justify-center items-center sm:items-end gap-5 overflow-hidden p-0 sm:p-20'>
                <h1 className='font-bold text-3xl sm:text-6xl flex flex-col sm:flex-row gap-5 justify-center items-center sm:items-start text-center sm:text-left'>Here’s what I’ve been building … <span><Image src={bulb} alt='this is a bulb' className='w-auto'/></span></h1>
                <p className='mt-5 font-medium text-slate-800 text-center sm:text-justify'>Explore a range of projects that showcase my skills in front-end, back-end, and full-stack development. From building engaging user interfaces to creating dynamic web applications, check out my Github profile.</p>
                {/* <button className='bg-black py-3 px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A]'>Check out my projects</button> */}
                <a href="https://github.com/SHERLOCKx90" target="_blank" rel="noopener noreferrer" className='bg-black py-3 px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A]'>
                    Check out my projects
                </a>
            </div>
        </div>

    )
}

export default Projects
