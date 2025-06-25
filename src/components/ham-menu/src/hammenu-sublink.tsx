import { forwardRef, Ref } from 'react';
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HamMenuSubLinkProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  index?: number;
  footerLinkPop: {
    initial: any;
    enter: any;
    exit: any;
  };
  [key: string]: any;
}

const HamMenuSubLink = forwardRef<HTMLAnchorElement, HamMenuSubLinkProps>((props, ref: Ref<HTMLAnchorElement>) => {
  const { children, className, style, as, index, footerLinkPop, ...otherProps } = props;
  const Component = as || 'a';
  const MotionComponent = motion.create(Component);
  return (
    <MotionComponent ref={ref}
      style={style}
      className={`text-[1dvw] no-underline block text-white font-normal overflow-hidden whitespace-nowrap text-ellipsis max-w-full max-lg:text-[16px] max-sm:text-[12px] ${className}`}
      variants={footerLinkPop}
      initial="initial"
      animate="enter"
      exit="exit"
      key={index}
      custom={index}
      {...otherProps}
    >
      {children}
    </MotionComponent>
  );
});

HamMenuSubLink.displayName = 'HamMenuSubLink';

export default HamMenuSubLink;