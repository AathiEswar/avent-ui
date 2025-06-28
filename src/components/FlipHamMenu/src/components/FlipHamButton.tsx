import React, { forwardRef } from 'react'
import { motion } from "framer-motion"
import { FlipHamButtonProps } from '../types'
import { useFlipHamMenuContext } from '../context/useFlipHamMenuContext'

const FlipHamButton = forwardRef(() => {
  const { isActive, setActive, openMenuLabel, closeMenuLabel } = useFlipHamMenuContext()

  const openLabel = openMenuLabel || 'CLOSE'
  const closeLabel = closeMenuLabel || 'MENU'

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        WebkitBackdropFilter: "blur(11.5px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
      onClick={(e) => setActive(!isActive)} className='fhb-wrapper shadow-lg h-10 w-[100px] rounded-2xl cursor-pointer overflow-hidden absolute top-0 right-0 em-button'>
      <motion.div className='fhb-motion-wrapper relative w-full h-full font-semibold'
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            WebkitBackdropFilter: "blur(11.5px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }} className='fhb-close-wrapper h-full w-full bg-[#c9fd74] flex items-center justify-center em-button '>
          <p className='fhb-close-label max-md:text-xs'>
            {closeLabel}
          </p>
        </div>
        <div className='fhb-open-wrapper h-full w-full bg-black text-white absolute top-[100%] flex items-center justify-center'>
          <p className='fhb-open-label max-md:text-xs'>
            {openLabel}
          </p>
        </div>
      </motion.div>
    </div>
  )
})

export default FlipHamButton
