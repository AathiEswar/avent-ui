import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { ReactBasicProp , anim } from './types'

const StackOverLap: FC<ReactBasicProp> = ({ children }) => {

  const slide = {
    initial: {
      top: '100dvh'
    },
    enter: {
      top: '100dvh',
    },
    exit: {
      top: '0',
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const prespective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  return (
    <div className='bg-black'>
      <motion.div {...anim(slide)} className='h-screen w-screen bg-white fixed top-0 left-0 z-20'></motion.div>
      <motion.div {...anim(prespective)} className=''>
        <motion.div
          // {...anim(opacity)} 
          className='bg-white h-screen w-screen'>
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default StackOverLap
