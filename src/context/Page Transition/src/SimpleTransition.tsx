import React from 'react'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { ReactBasicProp } from './types'

const SimpleTransition: FC<ReactBasicProp> = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        className='slide-in fixed top-0 left-0 w-screen h-screen bg-black z-50'
        style={{ transformOrigin: 'bottom' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className='slide-out fixed top-0 left-0 w-screen h-screen bg-black z-50'
        style={{ transformOrigin: 'top' }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  )
}

export default SimpleTransition
