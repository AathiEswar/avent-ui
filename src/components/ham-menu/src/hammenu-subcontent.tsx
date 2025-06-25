import React, { forwardRef, ReactNode, CSSProperties } from "react";

interface HamMenuSubContentProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
  animateDelay?: number;
  motionProp?: {
    initial?: any;
    enter?: any;
    exit?: any;
  };
  [key: string]: any;
}

const HamMenuSubContent = forwardRef<HTMLDivElement, HamMenuSubContentProps>((props, ref) => {
  const { children, as, className, style, animateDelay, motionProp, ...otherProps } = props;
  const Component = as || 'div';

  const footerLinkPop = motionProp || {
    initial: {
      opacity: 0,
      transition: { duration: 1 }
    },
    enter: (i: number) => ({
      opacity: 100,
      transition: { duration: 2, delay: i * (animateDelay || 0.3) }
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    }
  }

  return (
    <Component
      ref={ref}
      style={style}
      className={`flex gap-4 flex-wrap justify-center ${className}`}
      {...otherProps} >
      {
        React.Children.map(children, (child, index) => {
          return (
            child && React.cloneElement(child, { index, footerLinkPop })
          )
        })
      }
    </Component>
  )
})

export default HamMenuSubContent;