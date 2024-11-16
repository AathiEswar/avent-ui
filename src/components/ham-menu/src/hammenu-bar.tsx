import { forwardRef } from "react";
import React, { useState, Ref } from 'react';
import { AnimatePresence, motion , MotionProps , Variants } from 'framer-motion';
import styled from 'styled-components';
import CurveSvg from './hammenu-curve';
import { useButtonContext } from "./hammenu-provider";

const StyledMenuContainer = styled.section`
  position: fixed;
  width: 40%;
  top: 0;
  right: 0;
  height: 100dvh;
  color: white;
  z-index: 1;

  @media (max-width : 1023px) {
    width: 100%;
  }

  .body{
    overflow-y : scroll;
    padding : 40px 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap : 12px;

    @media (max-width : 768px) {
      padding: 60px;
    }

    @media (max-width : 425px) {
      padding: 40px;
    }
  }
`;

const MotionStyledMenuContainer = motion(StyledMenuContainer);

type MotionDivProps = Omit<React.HTMLProps<HTMLElement>, 'onAnimationStart' | 'onAnimationEnd' | 'ref' | 'as'> & MotionProps;

interface HamMenuBarProps extends MotionDivProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  motionProp?: {
    initial: any;
    enter: any;
    exit: any;
  };
}

export const HamMenuBar = forwardRef<HTMLElement, HamMenuBarProps>((props, ref: Ref<HTMLElement>) => {
  const { children, className, style, motionProp, as: Tag = 'section', ...otherProps } = props;
  const { isActive, toggleBackgroundColor , backgroundColor } = useButtonContext();

  const menuSlide = motionProp || {
    initial: {
      x: 'calc(100% + 100px)',
    },
    animate: {
      x: '0',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: 'calc(100% + 100px)',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  if (style?.backgroundColor) {
    toggleBackgroundColor(style.backgroundColor.toString());
  }

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <MotionStyledMenuContainer
          variants={menuSlide}
          initial="initial"
          animate="animate"
          exit="exit"
          ref={ref}
          style={style}
          className={className}
          {...(otherProps as MotionDivProps)}
        >
          <div className="body" style={{ backgroundColor: backgroundColor }}>
            {children}
            <CurveSvg />
          </div>
        </MotionStyledMenuContainer>
      )}
    </AnimatePresence>
  );
});

HamMenuBar.displayName = 'HamMenuBar';

export default HamMenuBar;