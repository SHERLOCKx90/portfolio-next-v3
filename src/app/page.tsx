// import Hero from '@/components/Hero'
// import React from 'react'
// import About from '@/components/About'
// import Projects from '@/components/Projects'
// import Skills from '@/components/Skills'
// import Resume from '@/components/Resume'
// import Footer from '@/components/Footer'

// // type Props = {}

// // Hero Section
// const page = () => {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Projects />
//       <Skills />
//       <Resume />
//     </>
//   )
// }

// export default page

import Hero from '@/components/Hero'
import React from 'react'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Resume from '@/components/Resume'

const page = () => {
  return (
    <>
      <section id="hero" className='sticky top-0 z-0'><Hero /></section>
      <section id="about" className='sticky top-0 z-10'><About /></section>
      <section id="projects" className='sticky top-0 z-20'><Projects /></section>
      <section id="skills" className='sticky top-0 z-30'><Skills /></section>
      <section id="resume" className='sticky top-0 z-40'><Resume /></section>
    </>
  )
}

export default page
