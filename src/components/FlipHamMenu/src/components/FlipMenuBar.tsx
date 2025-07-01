import React, { forwardRef, ReactNode, Ref } from "react"
import { motion } from "motion/react"
import { FlipHamBarLinksProps, FlipMenuBarProps } from "../types"
import { useFlipHamMenuContext } from "../context/useFlipHamMenuContext"
import { cn } from "@avent-ui/utils"

const FlipMenuBar = forwardRef<HTMLDivElement, FlipMenuBarProps>((props, ref: Ref<HTMLDivElement>) => {
  const { className, style, children, ...otherProps } = props;
  const { isActive, variants } = useFlipHamMenuContext()
  return (
    <motion.div
      ref={ref}
      className={cn('fhb-menu-bar relative bg-[#c9fd74] flex flex-col items-center justify-center rounded-2xl text-[60px]', className)}
      variants={variants}
      animate={isActive ? "open" : "close"}
      initial={"close"}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      style={{
        backdropFilter: "blur(11.5px)",
        WebkitBackdropFilter: " blur(11.5px)",
        borderColor : "#000",
        ...style
      }}
      {...otherProps}
    >

      {isActive &&
        React.Children.map(children, (child, index) => {
          return (
            React.isValidElement<FlipHamBarLinksProps>(child) ?
              React.cloneElement(child, { index }) :
              child
          )
        })
      }
    </motion.div>
  )
})

FlipMenuBar.displayName = "Flip Menu Bar"

export default FlipMenuBar