import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import FlipMenuBar from './FlipMenuBar';
import { FlipHamMenuProps } from '../types';

function FlipHamMenu({ flipHamMenuNavLinks }: FlipHamMenuProps) {
  const [isActive, setActive] = useState(false);
  const [screenDim, setScreenDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const variants = {
    close: {
      height: 40,
      width: 100,
      top: "0px",
      right: "0px",
      borderWidth: "0px"
    },
    open: {
      width: screenDim.width <= 480 ? "calc(100dvw - 20px)" : 480,
      height: screenDim.width <= 480 ? "calc(100dvh - 20px)" : 620,
      top: "-10px",
      right: "-10px",
      borderWidth: "1px"
    }
    ,
    opacityOn: {
      opacity: 1,
    },
    opacityOff: {
      opacity: 0
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function handleResize() {
    setScreenDim({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  return (
    <div className='em-header fixed text-black z-40 top-5 right-5'>

      <FlipMenuBar variants={variants} isActive={isActive} flipHamMenuNavLinks={flipHamMenuNavLinks} />

      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          WebkitBackdropFilter: "blur(11.5px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
        onClick={(e) => setActive(!isActive)} className='shadow-lg h-10 w-[100px] rounded-2xl cursor-pointer overflow-hidden absolute top-0 right-0 em-button'>
        <motion.div className='em-slider relative w-full h-full font-semibold'
          animate={{ top: isActive ? "-100%" : "0" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              WebkitBackdropFilter: "blur(11.5px)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }} className='em-el h-full w-full bg-[#c9fd74] flex items-center justify-center em-button '>
            <p className='em-el-para max-md:text-xs'>
              MENU
            </p>
          </div>
          <div className='em-el h-full w-full bg-black text-white absolute top-[100%] flex items-center justify-center'>
            <p className='em-el-para max-md:text-xs'>
              CLOSE
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


export default FlipHamMenu