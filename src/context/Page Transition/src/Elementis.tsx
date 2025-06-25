import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { anim, ReactBasicProp } from './types';

const Elementis: FC<ReactBasicProp> = ({ children }) => {
  const divCount = 30;

  const slide = {
    initial: {
      scaleY: 1,
    },
    enter: (index : number) => ({
      scaleY: 0,
      transition: {
        duration: 0.5,
        delay: (divCount - index) * 0.01,
        ease: [0.12, 0, 0.39, 0]
      },
      transitionEnd: {
        transformOrigin: 'bottom',
      }
    }),

    exit: (index : number) => ({
      scaleY: 1,
      transition: {
        duration: 0.5,
        delay: (divCount - index) * 0.01,
        ease: [0.12, 0, 0.39, 0]
      },
    }),
  }
  return (
    <>
      <div className='h-screen w-full flex flex-col fixed top-0 left-0 pointer-events-none z-50'>
        {
          Array.from({ length: divCount }).map((_, index) => {
            return (
              <div className='h-full w-full' >
                <motion.div
                  {...anim(slide, index)}
                  key={index}
                  className='bg-green-300 h-full w-screen'
                  style={{ transformOrigin: "top" }}
                ></motion.div>
              </div>
            )
          })
        }
      </div>
      {children}
    </>
  )
}

export default Elementis
