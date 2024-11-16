import { forwardRef, Ref } from 'react';
import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const Component = styled.a`
      font-size: 1dvw;
      text-decoration: none;
      display : block ;
      color : white;
      font-weight: 300;
      text-overflow: ellipsis;
      white-space: nowrap;        
      overflow: hidden;     
      @media(max-width : 1440px){
        font-size : 16px ;
      }     
      @media( max-width : 767px){
        font-size : 12px;
      } 
`;

const MotionComponent = motion.create(Component);

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
  const Tag = as || 'a';
  return (
    <MotionComponent ref={ref}
      style={style}
      className={className}
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