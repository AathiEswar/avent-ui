import React from "react"
import { motion } from "framer-motion"
import { FlipMenuBarProps } from "../types"
import { perspective } from "../utils/anim"

const FlipMenuBar = ({ variants, isActive, flipHamMenuNavLinks }: FlipMenuBarProps) => {
  return (
    <motion.div
      className='em-menu-bar relative bg-[#c9fd74] w-[480px] h-[650px] flex flex-col items-center justify-center rounded-2xl text-[60px] border border-2 border-black'
      variants={variants}
      animate={isActive ? "open" : "close"}
      initial={"close"}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid white",
        backdropFilter: "blur(11.5px)",
        WebkitBackdropFilter: " blur(11.5px)",
        borderRadius: "10px",
      }}
    >
      {isActive &&
        flipHamMenuNavLinks.map((link, index) => {
          return (
            <motion.div
              key={index}
              className='em-link-div overflow-hidden h-16 md:h-20 w-full'
              style={{
                perspective: "120px",
                perspectiveOrigin: "top",
              }}
              custom={index}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.div
                style={{
                  transition: "all 0.5s",
                }}
                className='em-link-doub relative w-full flex flex-col h-16 md:h-20 top-0 hover:top-[-100%]'
              >
                <div className='h-full h-16 md:h-20'>
                  <a
                    className='em-link h-16 md:h-20 flex items-center text-white text-[40px] md:text-[60px]'
                    href={`${link.href}`}
                    style={{
                      fontFamily: "PPBook",
                      paddingLeft: "20%",
                      fontWeight: "800",
                    }}
                    aria-label={`${link.text}`} >
                    {link.text}
                  </a>
                </div>

                <div className='h-full h-16 md:h-20 mt-2'>
                  <a className='flex items-center justify-center bg-black'
                    href={link.href}
                  >
                    {[...Array(4)].map((_, index) => (
                      <p
                        key={index}
                        className='em-link em-link-hover text-[40px] md:text-[60px] text-green-500 h-16 md:h-20 flex items-center slider-anim animate-slider pl-[10%]'
                        style={{
                          fontFamily: "PPBook",
                          paddingLeft: "20%",
                          fontWeight: "800",
                        }}
                        aria-label={`${link.text}`} >
                        {link.text}
                      </p>))}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )
        })
      }
    </motion.div>
  )
}

export default FlipMenuBar