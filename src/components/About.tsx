import React from 'react'
import Arrow from '../Assets/arrow.png';
import Image from 'next/image';
// type Props = {}

const About = () => {
    return (
        <div className='max-w-screen h-[100vh] flex flex-col justify-center items-center overflow-hidden p-20 sticky top-0 z-10 bg-white'>
            <h1 className='font-bold text-6xl flex flex-row gap-5 justify-center items-start'>Well, I'm ... <span><Image src={Arrow} alt='this is the arrow image'/></span></h1>
            <p className='mt-10 font-medium text-slate-800 mx-80 text-justify'>A well-focused, detail-oriented Computer Science student who holds an 8.28 GPA and is highly motivated to solve problems and develop software. Conversant in Java, Python, C++, solid on Data Structures, Algorithms, and full-stack Web development, UX research and product design; and under the continuously evolving software development methodologies. Have excellent coordination and communication skills, both inter and intrapersonal, and can take responsibilities independently and as a team. Pro-actively seeking for a challenging job in a professional and dynamic organization that provides one with an opportunity to practice, harness, and channel applied creativity and skills into bringing forth practical impactful solutions.</p>
        </div>
    )
}

export default About

