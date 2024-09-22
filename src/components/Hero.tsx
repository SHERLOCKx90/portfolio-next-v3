import React from 'react'
import Image from 'next/image'
import HeroImage from '../Assets/heroimage.png'
// type Props = {}

const Hero = () => {
    return (
        <div className='max-w-screen h-fit flex flex-col justify-center items-center overflow-hidden p-20 sticky top-0'>
            {/* eslint-disable react/no-unescaped-entities */}
            <Image src={HeroImage} alt='this is the hero image' width={1200} height={1200}/>
        </div>
    )
}

export default Hero