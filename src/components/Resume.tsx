// import React from 'react'
// import Image from 'next/image'
// import { ArrowDownToLine } from 'lucide-react';
// import Curl from '../Assets/curl.png'
// import Upward from '../Assets/upward.png'
// import Footer from './Footer';

// const Resume = () => {
//     return (
//         <div className='max-w-screen h-[100vh] flex flex-col justify-center items-center overflow-hidden p-20 bg-[#0056F6] sticky top-0 z-40'>
//             <span><Image src={Curl} alt='this is the curl arrow' width={300} height={300} className='mb-5' /></span>
//             <h1 className='font-bold text-6xl flex flex-row gap-5 justify-center items-start text-white'>Get the full story, Here’s my resume.</h1>
//             <p className='mt-10 font-normal text-orange-200 mx-80 text-center text-xl'>Looking for a detailed view of my professional journey? My resume provides a comprehensive snapshot of my skills, experience, and projects, highlighting my growth as a programmer, full-stack developer & UI/UX Designer.</p>
//             <button className='bg-black py-3 px-6 text-white font-medium justify-center items-center flex flex-row gap-3 rounded-full hover:translate-y-2 transition-all hover:text-[#979695] mt-10'> <span> <ArrowDownToLine /></span>Download my Resume</button>
//             <span><Image src={Upward} alt='this is the curl arrow' width={50} height={50} className='mt-8' /></span>
//             <Footer />
//         </div>

//     )
// }

// export default Resume


import React from 'react'
import Image from 'next/image'
import { ArrowDownToLine } from 'lucide-react';
import Curl from '../Assets/curl.png'
import Upward from '../Assets/upward.png'
import Footer from './Footer';

const Resume = () => {
    return (
        <div className='max-w-screen h-[100vh] flex flex-col justify-center items-center overflow-hidden p-20 bg-[#0056F6] sticky top-0 z-40'>
            {/* eslint-disable react/no-unescaped-entities */}
            <span><Image src={Curl} alt='this is the curl arrow' width={300} height={300} className='mb-5' /></span>
            <h1 className='font-bold text-6xl flex flex-row gap-5 justify-center items-start text-white'>Get the full story, Here’s my resume.</h1>
            <p className='mt-10 font-normal text-orange-200 mx-80 text-center text-xl'>Looking for a detailed view of my professional journey? My resume provides a comprehensive snapshot of my skills, experience, and projects, highlighting my growth as a programmer, full-stack developer & UI/UX Designer.</p>
            <a 
                href='/subhadeep_chell_resume.pdf' // Path to your resume file
                download='Subhadeep_Chell_Resume.pdf' // File name for download
                className='bg-black py-3 px-6 text-white font-medium justify-center items-center flex flex-row gap-3 rounded-full hover:translate-y-2 transition-all hover:text-[#979695] mt-10'
            >
                <ArrowDownToLine /> Download my Resume
            </a>
            <span><Image src={Upward} alt='this is the upward arrow' width={50} height={50} className='mt-8' /></span>
            <Footer />
        </div>
    )
}

export default Resume;
