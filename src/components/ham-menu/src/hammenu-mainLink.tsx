import React, { forwardRef, Ref } from "react";
import { motion, MotionProps } from "framer-motion";

type MotionLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onDragStart' | 'onDragEnd' | 'onDrag'> & MotionProps;

interface HamMenuMainLinkProps extends MotionLinkProps {
  children: React.ReactNode;
  className?: string;
  as?: any;
  style?: React.CSSProperties;
  index?: number;
  slide: {
    initial: any;
    enter: any;
    exit: any;
  };
}

const HamMenuMainLink = forwardRef<HTMLAnchorElement, HamMenuMainLinkProps>((props, ref: Ref<HTMLAnchorElement>) => {
  const { children, className, as, style, index, slide, ...otherProps } = props;
  const Component = as || 'a';
  const MotionComponent = motion.create(Component);

  return (
    <motion.a
      ref={ref}
      style={style}
      className={`no-underline text-white whitespace-nowrap overflow-hidden text-ellipsis text-[42px] md:text-[50px] xl:text-[4dvw] text-center md:text-left ${className || ''}`}
      key={index}
      custom={index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      {...otherProps}
    >
      {children}
    </motion.a>
  );
});

HamMenuMainLink.displayName = "HamMenuMainLink";

export default HamMenuMainLink;
