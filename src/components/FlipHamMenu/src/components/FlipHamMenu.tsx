import React, { forwardRef, Ref, useMemo } from 'react'
import { FlipHamMenuProps } from '../types';
import { useScreenDimensions } from "@avent-ui/use-screen-dimensions"
import { FlipHamMenuProvider } from '../context/useFlipHamMenuContext';
import { cn } from '@avent-ui/utils';

const FlipHamMenu = forwardRef<HTMLDivElement, FlipHamMenuProps>((props, ref: Ref<HTMLDivElement>) => {
  const { children, enableNavLinkHoverAnim, className, ...otherProps } = props;
  const { screenWidth } = useScreenDimensions()

  const variants = useMemo(() => ({
    close: {
      height: 40,
      width: 100,
      top: "0px",
      right: "0px",
      borderWidth: "0px"
    },
    open: {
      width: screenWidth <= 480 ? "calc(100dvw - 20px)" : 480,
      height: screenWidth <= 480 ? "calc(100dvh - 20px)" : 620,
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
  }), [screenWidth])

  return (
    <FlipHamMenuProvider variants={variants} enableNavLinkHoverAnim={enableNavLinkHoverAnim}>
      <div className={cn('fhm-container fixed text-black z-40 top-5 right-5', className)} {...otherProps} ref={ref}>
        {
          React.Children.map(children, (child) => {
            return (
              React.isValidElement(child) ? React.cloneElement(child) : child
            )
          })
        }
      </div>
    </FlipHamMenuProvider>
  )
})

FlipHamMenu.displayName = "Flip Ham Menu"

export default FlipHamMenu