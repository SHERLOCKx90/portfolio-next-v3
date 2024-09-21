// import React from 'react'
// import Image from 'next/image'
// import LogoImage from '../Assets/logo.svg'
// const NavBar = () => {
//   return (
//     <nav className='sticky top-0 z-50 bg-gray-100/20 backdrop-blur-lg transition-all justify-center flex flex-row items-center py-4'>
//         <aside className='flex flex-row gap-20 items-center justify-center'>
//             <Image src={LogoImage} alt='This is the logo image' width={100} height={100}/>
//             <ul className='list-none flex flex-row justify-between gap-10'>
//                 <li className='font-medium text-black hover:animation-slideInUnderline hover:transition-all cursor-pointer hover:text-[#FD853A]'>About</li>
//                 <li className='font-medium text-black hover:animation-slideInUnderline hover:transition-all cursor-pointer hover:text-[#FD853A]'>Projects</li>
//                 <li className='font-medium text-black hover:animation-slideInUnderline hover:transition-all cursor-pointer hover:text-[#FD853A]'>Skills</li>
//                 <li className='font-medium text-black hover:animation-slideInUnderline hover:transition-all cursor-pointer hover:text-[#FD853A]'>Resume</li>
//             </ul>
//             <button className='bg-[#0056F6] py-3 px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A] hover:bg-black'>Let's Talk</button>
//         </aside>
//     </nav>
//   )
// }

// export default NavBar

import React from 'react'
import Image from 'next/image'
import LogoImage from '../Assets/logo.svg'

const NavBar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-gray-100/20 backdrop-blur-lg transition-all justify-center flex flex-row items-center py-4'>
        <aside className='flex flex-row gap-20 items-center justify-center'>
            <Image src={LogoImage} alt='This is the logo image' width={100} height={100}/>
            <ul className='list-none flex flex-row justify-between gap-10'>
                <li className='font-medium text-black cursor-pointer'>
                    <a href="#about" className="hover:underline hover:text-[#FD853A]">About</a>
                </li>
                <li className='font-medium text-black cursor-pointer'>
                    <a href="#projects" className="hover:underline hover:text-[#FD853A]">Projects</a>
                </li>
                <li className='font-medium text-black cursor-pointer'>
                    <a href="#skills" className="hover:underline hover:text-[#FD853A]">Skills</a>
                </li>
                <li className='font-medium text-black cursor-pointer'>
                    <a href="#resume" className="hover:underline hover:text-[#FD853A]">Resume</a>
                </li>
            </ul>
            {/* <button className='bg-[#0056F6] py-3 px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A] hover:bg-black'>Let's Talk</button> */}
            <a href="mailto:sherlockx90@gmail.com" className='bg-[#0056F6] py-3 px-6 text-white font-medium justify-center items-center flex flex-col rounded-full hover:translate-x-1 hover:transition-all hover:text-[#FD853A] hover:bg-black'>
                Let's Talk
            </a>
        </aside>
    </nav>
  )
}

export default NavBar
