// import React from 'react'
// import Image from 'next/image'
// import { ArrowDownToLine } from 'lucide-react';
// import Curl from '../Assets/curl.png'
// import Upward from '../Assets/upward.png'
// import Footer from './Footer';

// const Resume = () => {
//     return (
//         <div className='max-w-screen h-fit sm:h-[100vh] flex flex-col justify-center items-center overflow-hidden p-14 bg-[#0056F6] sticky top-0 z-40'>
//             {/* eslint-disable react/no-unescaped-entities */}
//             <span><Image src={Curl} alt='this is the curl arrow' width={300} height={300} className='mb-5' /></span>
//             <h1 className='font-bold text-6xl flex flex-row gap-5 justify-center items-start text-white'>Get the full story, Here’s my resume.</h1>
//             <p className='mt-10 font-normal text-orange-200 sm:mx-80 text-left sm:text-center text-xl'>Looking for a detailed view of my professional journey? My resume provides a comprehensive snapshot of my skills, experience, and projects, highlighting my growth as a programmer, full-stack developer & UI/UX Designer.</p>
//             <a 
//                 href='/subhadeep_chell_resume.pdf' // Path to your resume file
//                 download='Subhadeep_Chell_Resume.pdf' // File name for download
//                 className='bg-black sm:py-3 sm:px-6 px-8 py-4 text-white font-medium justify-center items-center flex flex-row gap-3 rounded-full hover:translate-y-2 transition-all hover:text-[#979695] mt-10'
//             >
//                 <ArrowDownToLine /> Download my Resume
//             </a>
//             <span><Image src={Upward} alt='this is the upward arrow' width={50} height={50} className='mb-20 mt-8' /></span>
//             <Footer />
//         </div>
//     )
// }

// export default Resume;


// "use client"; // Ensure this component is treated as a client component

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowDownToLine } from 'lucide-react';
import Curl from '../Assets/curl.png';
import Upward from '../Assets/upward.png';
import Footer from './Footer';
import { motion, useInView } from 'framer-motion';

const Resume = () => {
    const ref = useRef(null); // Reference for the section to track its view state
    const isInView = useInView(ref); // Detect if the section is in view

    // Variants for the text and image animations
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            ref={ref}
            className='max-w-screen h-fit sm:h-[100vh] flex flex-col justify-center items-center overflow-hidden p-14 bg-[#0056F6] sticky top-0 z-40'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.3 }} // Stagger effect for the children elements
        >
            {/* Curl Arrow Animation */}
            <motion.span
                variants={imageVariants}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    type: 'spring',
                    stiffness: 100,
                    damping: 8,
                }}
            >
                <Image src={Curl} alt='this is the curl arrow' width={300} height={300} className='mb-5' />
            </motion.span>

            {/* Heading Animation */}
            <motion.h1
                className='font-bold text-6xl flex flex-row gap-5 justify-center items-start text-white'
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.4 }} // Delay for heading
            >
                Get the full story, Here’s my resume.
            </motion.h1>

            {/* Paragraph Animation */}
            <motion.p
                className='mt-10 font-normal text-orange-200 sm:mx-80 text-left sm:text-center text-xl'
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.6 }} // Delay for paragraph
            >
                Looking for a detailed view of my professional journey? My resume provides a comprehensive snapshot of my skills, experience, and projects, highlighting my growth as a programmer, full-stack developer & UI/UX Designer.
            </motion.p>

            {/* Download Button Animation */}
            <motion.a
                href='/subhadeep_chell_resume.pdf' // Path to your resume file
                download='Subhadeep_Chell_Resume.pdf' // File name for download
                className='bg-black sm:py-3 sm:px-6 px-8 py-4 text-white font-medium justify-center items-center flex flex-row gap-3 rounded-full mt-10 hover:text-orange-200'
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.8 }} // Delay for the button
                // whileHover={{
                //     y: -5, // Move up slightly on hover
                //     backgroundColor: '#1f1f1f', // Slight change in background color
                //     transition: {
                //         duration: 0.1, // Smooth transition for hover
                //         ease: 'linear', // Smoother easing
                //     },
                // }}
                
            >
                <ArrowDownToLine /> Download my Resume
            </motion.a>

            {/* Upward Arrow Animation */}
            <motion.span
                variants={imageVariants}
                transition={{
                    duration: 0.8,
                    delay: 1.0,
                    type: 'spring',
                    stiffness: 100,
                    damping: 8,
                }}
            >
                <Image src={Upward} alt='this is the upward arrow' width={50} height={50} className='mb-20 mt-8' />
            </motion.span>

            <Footer />
        </motion.div>
    );
}

export default Resume;
