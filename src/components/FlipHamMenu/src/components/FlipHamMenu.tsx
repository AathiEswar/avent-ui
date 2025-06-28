import React, { forwardRef, Ref, useState } from 'react'
import FlipMenuBar from './FlipMenuBar';
import { FlipHamMenuProps } from '../types';
import FlipHamButton from './FlipHamButton';
import { useScreenDimensions } from "@avent-ui/use-screen-dimensions"
import { FlipHamMenuProvider } from '../context/useFlipHamMenuContext';

const FlipHamMenu = forwardRef<HTMLDivElement, FlipHamMenuProps>((props, ref: Ref<HTMLDivElement>) => {
  const { flipHamMenuNavLinks, openMenuLabel, closeMenuLabel, children, ...otherProps } = props;
  const { screenWidth } = useScreenDimensions()

  const variants = {
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
  }
  return (
    <FlipHamMenuProvider variants={variants} flipHamMenuNavLinks={flipHamMenuNavLinks} openMenuLabel={openMenuLabel} closeMenuLabel={closeMenuLabel}>
      <div className='fhm-container fixed text-black z-40 top-5 right-5' {...otherProps}>
        <FlipMenuBar />
        <FlipHamButton />
      </div>
    </FlipHamMenuProvider>
  )
})


export default FlipHamMenu