import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { ReactBasicProp } from './types'

const SimpleTransitionLR: FC<ReactBasicProp> = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        className='slide-in fixed top-0 left-0 w-screen h-screen bg-black z-50'
        style={{ transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className='slide-out fixed top-0 left-0 w-screen h-screen bg-black z-50'
        style={{ transformOrigin: 'right' }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  )
}

export default SimpleTransitionLR
