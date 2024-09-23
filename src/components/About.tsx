// import React from 'react'
// import Arrow from '../Assets/arrow.png';
// import Image from 'next/image';
// // type Props = {}

// const About = () => {
//     return (
//         <div className='max-w-screen sm:h-[100vh] flex flex-col justify-center items-start sm:items-center overflow-hidden py-20 sm:p-20 sticky top-0 z-10 bg-white'>
//             {/* eslint-disable react/no-unescaped-entities */}
//             <h1 className='font-bold text-4xl sm:text-6xl flex flex-row sm:flex-row gap-5 sm:justify-center items-end sm:items-start mx-14 sm:mx-0'>Well, I'm ... <span><Image src={Arrow} alt='this is the arrow image'/></span></h1>
//             <p className='mt-10 font-medium text-slate-800 mx-14 sm:mx-80 text-left sm:text-justify'>A well-focused, detail-oriented Computer Science student who holds an 8.28 GPA and is highly motivated to solve problems and develop software. Conversant in Java, Python, C++, solid on Data Structures, Algorithms, and full-stack Web development, UX research and product design; and under the continuously evolving software development methodologies. Have excellent coordination and communication skills, both inter and intrapersonal, and can take responsibilities independently and as a team. Pro-actively seeking for a challenging job in a professional and dynamic organization that provides one with an opportunity to practice, harness, and channel applied creativity and skills into bringing forth practical impactful solutions.</p>
//         </div>
//     )
// }

// export default About

"use client"; // Ensure this component is treated as a client component

import React, { useRef } from 'react';
import Arrow from '../Assets/arrow.png';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = useRef(null); // Reference for the section to track its view state
    const isInView = useInView(ref); // Detect if the section is in view and trigger only once

    // Animation variants for entry
    const textVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial state before scrolling to the section
        visible: { opacity: 1, y: 0 }, // Final state after scrolling to the section
    };

    return (
        <div
            ref={ref}
            className='max-w-screen sm:h-[100vh] flex flex-col justify-center items-start sm:items-center overflow-hidden py-20 sm:p-20 sticky top-0 z-10 bg-white'
        >
            {/* eslint-disable react/no-unescaped-entities */}
            <motion.h1
                className='font-bold text-4xl sm:text-6xl flex flex-row sm:flex-row gap-5 sm:justify-center items-end sm:items-start mx-14 sm:mx-0'
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Trigger animation based on scroll position
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Well, I'm ...
                <span>
                    <Image src={Arrow} alt='this is the arrow image' />
                </span>
            </motion.h1>

            <motion.p
                className='mt-10 font-medium text-slate-800 mx-14 sm:mx-80 text-left sm:text-justify'
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Trigger animation based on scroll position
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                A well-focused, detail-oriented Computer Science student who holds an 8.28 GPA and is highly motivated to solve problems and develop software. Conversant in Java, Python, C++, solid on Data Structures, Algorithms, and full-stack Web development, UX research and product design; and under the continuously evolving software development methodologies. Have excellent coordination and communication skills, both inter and intrapersonal, and can take responsibilities independently and as a team. Pro-actively seeking for a challenging job in a professional and dynamic organization that provides one with an opportunity to practice, harness, and channel applied creativity and skills into bringing forth practical impactful solutions.
            </motion.p>
        </div>
    );
}

export default About;

