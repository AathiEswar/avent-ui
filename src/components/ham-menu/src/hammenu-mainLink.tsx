import React, { forwardRef, Ref } from "react";
import { motion, MotionProps } from "framer-motion";
import styled from "styled-components";

// Styled component definition
const Component = styled.a`
  font-size: 4dvw;
  text-decoration: none;
  display: block;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 1023px) {
    font-size: 50px;
  }
  @media (max-width: 767px) {
    font-size: 42px;
  }
  @media (max-width: 424px) {
    text-align: center;
    font-size: 40px;
  }
`;

const MotionComponent = motion(Component);

type MotionLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 
  'onAnimationStart' | 'onAnimationEnd' | 'onDragStart' | 'onDragEnd' | 'onDrag' > & MotionProps;

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
  const Tag = as || 'a'; // Default to <a> tag

  return (
    <MotionComponent
      ref={ref}
      style={style}
      className={className}
      key={index}
      custom={index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      {...otherProps} // Spread the remaining props
    >
      {children}
    </MotionComponent>
  );
});

HamMenuMainLink.displayName = "HamMenuMainLink";

export default HamMenuMainLink;
