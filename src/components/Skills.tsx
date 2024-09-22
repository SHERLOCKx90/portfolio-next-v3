import React from 'react'
import Image from 'next/image'
import Skills from '../Assets/skills.png'
import Bend from '../Assets/bend.png'

const Projects = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center mx-20 sm:mx-60 max-w-screen h-fit sm:h-[100vh] sticky top-0 bg-white z-30 py-20 sm:py-0'>
            {/* eslint-disable react/no-unescaped-entities */}
            <div className='w-full sm:w-[40%] h-fit flex flex-col justify-center items-end gap-5 overflow-hidden sm:p-20'>
                <h1 className='font-bold text-3xl sm:text-6xl flex flex-col gap-5 justify-center items-start text-center sm:text-left'><span><Image src={Bend} alt='this is a bulb' width={200} height={200} /></span> Skills in my toolkit, powering up every project. </h1>
                <p className='my-10 sm:mt-5 font-medium text-slate-800 text-center sm:text-justify'>Throughout my journey as a developer, I’ve honed a wide array of technical skills, covering both front-end and back-end development. From creating visually appealing user interfaces to building scalable back-end systems.</p>
            </div>
            <div className='w-full sm:w-[60%] h-fit pb-20 sm:pb-0'>
                <Image src={Skills} alt='this is Skills image' width={700} height={700} className='filter grayscale' />
            </div>
        </div>

    )
}

export default Projects
