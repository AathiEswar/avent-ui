import React from 'react'
import { motion } from "framer-motion"
import { FlipHamButtonProps } from '../types'

const FlipHamButton = ({ isActive, setActive }: FlipHamButtonProps) => {
  return (
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
  )
}

export default FlipHamButton
