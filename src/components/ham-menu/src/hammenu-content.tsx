import React, { forwardRef, ReactNode, CSSProperties, useMemo } from 'react';

interface HamMenuContentsProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
  className?: string;
  animateDelay?: number;
  motionProp?: {
    initial: any;
    enter: any;
    exit: any;
  };
  [key: string]: any;
}

const HamMenuContents = React.memo(forwardRef<HTMLDivElement, HamMenuContentsProps>((props, ref) => {
  const { children, as, style, className, animateDelay, motionProp, ...otherProps } = props;
  const Component = as || 'div';

  const slide = useMemo(() => {
    return (motionProp || {
      initial: {
        x: "80px",
      },
      enter: (i: number) => ({
        x: '0',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * (animateDelay || 0.05) }
      }),
      exit: (i: number) => ({
        x: '80px',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * (-1 * (animateDelay || 0.05)) }
      })
    })
  }, [animateDelay, motionProp]);

  return (
    <Component
      ref={ref}
      className={`flex flex-col mt-3 gap-3 ${className || ''}`}
      style={style}
      {...otherProps}>
      {
        React.Children.map(children, (child, index) => {
          return (
            child && React.cloneElement(child, { index, slide })
          )
        })
      }
    </Component>
  )
}))

HamMenuContents.displayName = 'HamMenuContents';
export default HamMenuContents;