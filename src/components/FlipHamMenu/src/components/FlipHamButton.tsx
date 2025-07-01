import React, { forwardRef, Ref } from 'react'
import { useFlipHamMenuContext } from '../context/useFlipHamMenuContext'
import { FlipHamButtonProps } from '../types'
import { cn } from '@avent-ui/utils'
import { MotionDiv } from '../motionTypes'

const FlipHamButton = forwardRef((props: FlipHamButtonProps, ref: Ref<HTMLDivElement>) => {
  const { isActive, handleActiveState } = useFlipHamMenuContext()
  const { className, style, children, ...otherProps } = props;
  return (
    <div
      ref={ref}
      style={{
        WebkitBackdropFilter: "blur(11.5px)",
        ...style
      }}
      onClick={() => handleActiveState()}
      className={cn('fhb-wrapper shadow-lg h-10 w-[100px] rounded-2xl cursor-pointer overflow-hidden absolute top-0 right-0 em-button', className)}
      {...otherProps}
    >
      <MotionDiv className='fhb-motion-wrapper relative w-full h-full'
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >
        {
          React.Children.map(children, (child) => {
            return (
              React.isValidElement(child) ? React.cloneElement(child) : child
            )
          })
        }
      </MotionDiv>
    </div>
  )
})

FlipHamButton.displayName = "Flip Ham Button"

export default FlipHamButton
