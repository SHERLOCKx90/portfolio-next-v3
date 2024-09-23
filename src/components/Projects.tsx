// import React from 'react'
// import Image from 'next/image'
// import ProjectImg1 from '../Assets/ProjectImg1.png'
// import ProjectImg2 from '../Assets/ProjectImg2.png'
// import ProjectImg3 from '../Assets/ProjectImg3.png'
// import bulb from '../Assets/bulb.png'


// const Projects = () => {
//     return (
//         <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-0 items-center mx-14 sm:mx-60 max-w-screen h-fit sm:h-[100vh] sticky top-0 z-20 bg-white py-20 sm:py-0'>
//             {/* eslint-disable react/no-unescaped-entities */}
//             <div className='grid grid-cols-2 w-full sm:w-[40%] h-fit'>
//                 {/* <Image src={ProjectImg} alt='This is the image of projects' width={400} height={400} /> */}
//                 <Image src={ProjectImg1} alt='this is project image' width={300} height={300} className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-t-full hover:translate-y-2' />
//                 <Image src={ProjectImg2} alt='this is project image' width={300} height={300} className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-b-full hover:translate-y-2' />
//                 <Image src={ProjectImg3} alt='this is project image' width={300} height={300} className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-t-full hover:translate-y-2' />
//             </div>
//             <div className='sm:w-[60%] w-full h-fit flex flex-col justify-center items-center sm:items-end gap-5 overflow-hidden p-0 sm:p-20'>
//                 <h1 className='font-bold text-3xl sm:text-6xl flex flex-col sm:flex-row gap-5 justify-center items-start sm:items-start text-left sm:text-left'>Here’s what I’ve been building … <span><Image src={bulb} alt='this is a bulb' className='w-auto'/></span></h1>
//                 <p className='mt-5 font-medium text-slate-800 text-left sm:text-justify'>Explore a range of projects that showcase my skills in front-end, back-end, and full-stack development. From building engaging user interfaces to creating dynamic web applications, check out my Github profile.</p>
//                 {/* <button className='bg-black py-3 px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A]'>Check out my projects</button> */}
//                 <a href="https://github.com/SHERLOCKx90" target="_blank" rel="noopener noreferrer" className='bg-black py-3 px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A]'>
//                     Check out my projects
//                 </a>
//             </div>
//         </div>

//     )
// }

// export default Projects


"use client"; // Ensure this component is treated as a client component

import React, { useRef } from 'react';
import Image from 'next/image';
import ProjectImg1 from '../Assets/ProjectImg1.png';
import ProjectImg2 from '../Assets/ProjectImg2.png';
import ProjectImg3 from '../Assets/ProjectImg3.png';
import bulb from '../Assets/bulb.png';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
    const ref = useRef(null); // Create a reference for the section
    const isInView = useInView(ref); // Detect if the section is in view

    // Variants for the text animations
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    // Animation variant for the images (bouncy pop-up effect)
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            ref={ref}
            className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-0 items-center mx-14 sm:mx-60 max-w-screen h-fit sm:h-[100vh] sticky top-0 z-20 bg-white py-20 sm:py-0'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.4 }} // Add stagger effect
        >
            <motion.div
                className='grid grid-cols-2 w-full sm:w-[40%] h-fit'
                variants={imageVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div
                    variants={imageVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        type: 'spring', // Add spring for bouncy effect
                        stiffness: 100, // Control the spring's stiffness
                        damping: 8, // Add damping for bounce control
                    }}
                >
                    <Image
                        src={ProjectImg1}
                        alt='this is project image'
                        width={300}
                        height={300}
                        className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-t-full hover:translate-y-2'
                    />
                </motion.div>
                <motion.div
                    variants={imageVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        type: 'spring', // Add spring for bouncy effect
                        stiffness: 100, // Control the spring's stiffness
                        damping: 8, // Add damping for bounce control
                    }}
                >
                    <Image
                        src={ProjectImg2}
                        alt='this is project image'
                        width={300}
                        height={300}
                        className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-b-full hover:translate-y-2'
                    />
                </motion.div>
                <motion.div
                    variants={imageVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        type: 'spring', // Add spring for bouncy effect
                        stiffness: 100, // Control the spring's stiffness
                        damping: 8, // Add damping for bounce control
                    }}
                >
                    <Image
                        src={ProjectImg3}
                        alt='this is project image'
                        width={300}
                        height={300}
                        className='filter grayscale hover:filter-none translate-y-1 transition-all cursor-pointer rounded-t-full hover:translate-y-2'
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className='sm:w-[60%] w-full h-fit flex flex-col justify-center items-center sm:items-end gap-5 overflow-hidden p-0 sm:p-20'
                variants={textVariants}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className='font-bold text-3xl sm:text-6xl flex flex-col sm:flex-row gap-5 justify-center items-start sm:items-start text-left sm:text-left'
                    variants={textVariants}
                    transition={{ duration: 0.6, delay: 0.8 }} // Delay for heading
                >
                    Here’s what I’ve been building …
                    <span>
                        <Image src={bulb} alt='this is a bulb' className='w-auto' />
                    </span>
                </motion.h1>

                <motion.p
                    className='mt-5 font-medium text-slate-800 text-left sm:text-justify'
                    variants={textVariants}
                    transition={{ duration: 0.6, delay: 1.2 }} // Delay for paragraph
                >
                    Explore a range of projects that showcase my skills in front-end, back-end, and full-stack development. From building engaging user interfaces to creating dynamic web applications, check out my Github profile.
                </motion.p>

                <motion.a
                    href="https://github.com/SHERLOCKx90"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-black py-3 px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A]'
                    variants={textVariants}
                    transition={{ duration: 0.6, delay: 1.2 }} // Delay for the button
                >
                    Check out my projects
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Projects;

