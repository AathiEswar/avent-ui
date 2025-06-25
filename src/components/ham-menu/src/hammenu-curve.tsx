import React, { forwardRef } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const initialPath: string = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
const targetPath: string = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

const pathAnimation = {
  initial: {
    d: initialPath
  },
  enter: {
    d: targetPath,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    d: initialPath,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  }
};

interface HamMenuCurveProps extends Omit<SVGMotionProps<SVGSVGElement>, 'ref'> {
  className?: string;
  style?: React.CSSProperties;
}

const HamMenuCurve = forwardRef<SVGSVGElement, HamMenuCurveProps>(
  ({ className, style, ...otherProps }, ref) => {
    return (
      <svg
        ref={ref}
        className={`absolute top-0 left-[-99px] w-[100px] h-screen stroke-none`}>
        <motion.path
          style={style}
          initial='initial'
          variants={pathAnimation}
          animate='enter'
          exit="exit"
          className={`h-screen ${className || ''}`}
          d={initialPath}>
        </motion.path>
      </svg>
    );
  })

export default HamMenuCurve;
