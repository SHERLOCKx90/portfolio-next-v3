// import Hero from '@/components/Hero'
// import React from 'react'
// import About from '@/components/About'
// import Projects from '@/components/Projects'
// import Skills from '@/components/Skills'
// import Resume from '@/components/Resume'

// const page = () => {
//   return (
//     <>
//       <section id="hero" className='sticky top-0 z-0'><Hero /></section>
//       <section id="about" className='sticky top-0 z-10'><About /></section>
//       <section id="projects" className='sticky top-0 z-20'><Projects /></section>
//       <section id="skills" className='sticky top-0 z-30'><Skills /></section>
//       <section id="resume" className='sticky top-0 z-40'><Resume /></section>
//     </>
//   )
// }

// export default page

'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Resume from '@/components/Resume'
import { motion } from 'framer-motion';
import React from 'react';

const page = () => {
  // Variants for the animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
    visible: { opacity: 1, y: 0 }, // Animate to this state
    exit: { opacity: 0, y: 50 } // Exit animation when leaving
  };

  return (
    <>
      <motion.section
        id="hero"
        // className='sticky top-0 z-0'
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.section>

      <motion.section
        id="about"
        // className='sticky top-0 z-10'
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <About />
      </motion.section>

      <motion.section
        id="projects"
        // className='sticky top-0 z-20'
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="skills"
        // className='sticky top-0 z-30'
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Skills />
      </motion.section>

      <motion.section
        id="resume"
        // className='sticky top-0 z-40'
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Resume />
      </motion.section>
    </>
  )
}

export default page;
