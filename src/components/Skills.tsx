// import React from 'react'
// import Image from 'next/image'
// import Skills from '../Assets/skills.png'
// import Bend from '../Assets/bend.png'

// const Projects = () => {
//     return (
//         <div className='flex flex-col sm:flex-row justify-center items-center mx-14 sm:mx-60 max-w-screen h-fit sm:h-[100vh] sticky top-0 bg-white z-30 py-20 sm:py-0'>
//             {/* eslint-disable react/no-unescaped-entities */}
//             <div className='w-full sm:w-[40%] h-fit flex flex-col justify-center items-end gap-5 overflow-hidden sm:p-20'>
//                 <h1 className='font-bold text-3xl sm:text-6xl flex flex-col gap-5 justify-center items-start text-left sm:text-left'><span><Image src={Bend} alt='this is a bulb' width={200} height={200} /></span> Skills in my toolkit, powering up every project. </h1>
//                 <p className='my-10 sm:mt-5 font-medium text-slate-800 text-left sm:text-justify'>Throughout my journey as a developer, I’ve honed a wide array of technical skills, covering both front-end and back-end development. From creating visually appealing user interfaces to building scalable back-end systems.</p>
//             </div>
//             <div className='w-full sm:w-[60%] h-fit pb-20 sm:pb-0'>
//                 <Image src={Skills} alt='this is Skills image' width={700} height={700} className='filter grayscale' />
//             </div>
//         </div>

//     )
// }

// export default Projects


"use client"; // Ensure this component is treated as a client component

import React, { useRef } from 'react';
import Image from 'next/image';
import Skills from '../Assets/skills.png';
import Bend from '../Assets/bend.png';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
    const ref = useRef(null); // Reference for the section to track its view state
    const isInView = useInView(ref, { triggerOnce: true }); // Detect if the section is in view

    // Animation variants for text elements
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    // Animation variant for the image (smooth pop-out with bounce effect)
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            ref={ref}
            className='flex flex-col sm:flex-row justify-center items-center mx-14 sm:mx-60 max-w-screen h-fit sm:h-[100vh] sticky top-0 bg-white z-30 py-20 sm:py-0'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.3 }} // Stagger effect for text and image
        >
            <motion.div
                className='w-full sm:w-[40%] h-fit flex flex-col justify-center items-end gap-5 overflow-hidden sm:p-20'
                variants={textVariants}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className='font-bold text-3xl sm:text-6xl flex flex-col gap-5 justify-center items-start text-left sm:text-left'
                    variants={textVariants}
                    transition={{ duration: 0.6, delay: 0.2 }} // Delay for heading
                >
                    <span>
                        <Image src={Bend} alt='this is a bulb' width={200} height={200} />
                    </span>
                    Skills in my toolkit, powering up every project.
                </motion.h1>

                <motion.p
                    className='my-10 sm:mt-5 font-medium text-slate-800 text-left sm:text-justify'
                    variants={textVariants}
                    transition={{ duration: 0.6, delay: 0.4 }} // Delay for paragraph
                >
                    Throughout my journey as a developer, I’ve honed a wide array of technical skills, covering both front-end and back-end development. From creating visually appealing user interfaces to building scalable back-end systems.
                </motion.p>
            </motion.div>

            <motion.div
                className='w-full sm:w-[60%] h-fit pb-20 sm:pb-0'
                variants={imageVariants}
                transition={{
                    duration: 0.8, // Duration of the bounce effect
                    delay: 0.6,    // Delay before the image starts animating
                    type: 'spring', // Spring effect for bounce
                    stiffness: 100, // Control how tight the spring is (higher value = more stiff)
                    damping: 10     // Control the bounce (lower value = more bounce)
                }}
            >
                <Image
                    src={Skills}
                    alt='this is Skills image'
                    width={700}
                    height={700}
                    className='filter grayscale'
                />
            </motion.div>
        </motion.div>
    );
};

export default Projects;
