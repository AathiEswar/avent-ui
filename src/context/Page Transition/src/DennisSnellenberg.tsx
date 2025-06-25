import React, { FC, ReactNode } from 'react'
import { MotionProps, Variants, motion } from 'framer-motion'
import { ReactBasicProp , anim } from './types';

const DennisSnellenberg: FC<ReactBasicProp> = ({ children }) => {

  const opacity = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    }
  }


  return (
    <div className='min-h-screen w-full'>
      {
        children
      }
      <SVGMask />
    </div>
  )
}

const SVGMask = () => {
  const { innerHeight, innerWidth } = window;
  const initialPath = `M0 300 C0,300 ${innerWidth / 2},-300 ${innerWidth},300 
                       L${innerWidth},${innerHeight + 300} 
                       C${innerWidth},${innerHeight + 300} ${innerWidth / 2},${innerHeight + 600} 0,${innerHeight + 300}
                       Z
                       `
  const finalPath = `M0 300 C0,300 ${innerWidth / 2},300 ${innerWidth},300 
                       L${innerWidth},${innerHeight} 
                       C${innerWidth},${innerHeight} ${innerWidth / 2},${innerHeight} 0,${innerHeight}
                       Z
                       `

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: finalPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      },
    },
    exit: {
      d: initialPath,
    }
  }

  const slide = {
    initial: {
      top: "-300px"
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      },
      transitionEnd: {
        top: "100dvh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      },
    }
  }
  return (
    <motion.svg {...anim(slide)}
      className='w-screen fixed  left-0 pointer-events-none'
      style={{ height: "calc(100vh + 600px)" }}>
      <motion.path {...anim(curve)} ></motion.path>
    </motion.svg>
  )
}

export default DennisSnellenberg
