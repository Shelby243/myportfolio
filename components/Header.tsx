import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center'>
        <motion.div

        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5,
        }}
         className='flex flex-row items-center'>

            {/*  social icons */}
            <SocialIcon 
            url='https://github.com/Shelby243'
            fgColor='gray' 
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://instagram.com/thomylowe'
            fgColor='gray' 
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://twitter.com/ShelbyPadre'
            fgColor='gray' 
            bgColor='transparent'
            />

        </motion.div>
       
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{duration:1}}

        className='flex flex-row items-center text-gray-300'>
        <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray' 
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get In Touch
            </p>
        </motion.div>
    </header>
  )
}

export default Header