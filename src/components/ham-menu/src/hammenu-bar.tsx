import { ForwardRefExoticComponent, forwardRef } from "react";
import React, { Ref } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { useButtonContext } from "./hammenu-provider";


type MotionDivProps = Omit<React.HTMLProps<HTMLElement>, 'onAnimationStart' | 'onAnimationEnd' | 'ref' | 'as'> & MotionProps;

interface HamMenuBarProps extends MotionDivProps {
  children: React.ReactNode;
  className?: string;
  classNameInner?: string;
  classNameOuter?: string;
  as?: string | ForwardRefExoticComponent<any>;
  motionProp?: {
    initial: any;
    enter: any;
    exit: any;
  };
}

export const HamMenuBar = forwardRef<HTMLElement, HamMenuBarProps>((props, ref: Ref<HTMLElement>) => {
  const { children, className, style, motionProp, as, ...otherProps } = props;
  const { isActive } = useButtonContext();
  const Container = as || 'section';
  const MotionStyledMenuContainer = motion(Container);
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
          className={`bg-black fixed top-0 right-0 h-screen text-white w-full z-[1] lg:w-[30%] ${className || ''}`}>
          <div className={`ham-menu-inner-bar overflow-y-scroll p-[40px_10%] h-full flex flex-col justify-between gap-[12px] max-md:p-[60px] max-sm:p-[40px]`} >
            {children}
          </div>
        </MotionStyledMenuContainer>
      )}
    </AnimatePresence>
  );
});

HamMenuBar.displayName = 'HamMenuBar';

export default HamMenuBar;