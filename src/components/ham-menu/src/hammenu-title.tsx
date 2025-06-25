import React, { ElementType, forwardRef, Ref } from 'react';

interface HamMenuTitleProps  {
  children: React.ReactNode;
  style?: React.CSSProperties;
  as?: ElementType;
  className?: string;
}

const HamMenuTitle = forwardRef<HTMLParagraphElement, HamMenuTitleProps>((props, ref: Ref<HTMLParagraphElement>) => {
  const { children, style, as, className, ...otherProps } = props;
  const Component = as || 'p';

  return (
    <Component
      ref={ref}
      style={style}
      className={`2xl:text-[1.5dvw] text-[gray] border-b border-[gray] border-solid pb-2 w-full ${className}`}
      {...otherProps}>
      {
        children
      }
    </Component>
  )
})

HamMenuTitle.displayName = 'HamMenuTitle'

export default HamMenuTitle;