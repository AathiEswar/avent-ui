import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';

const Component = styled.p`
    font-size: 2dvw;
    color: gray;
    margin-bottom: 0px;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    width : 100%;
    @media ( max-width : 1440px){
      font-size : large;
    }
`

interface HamMenuTitleProps extends React.HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const HamMenuTitle = forwardRef<HTMLParagraphElement, HamMenuTitleProps>((props, ref: Ref<HTMLParagraphElement>) => {
  const { children, style, as, className, ...otherProps } = props;
  const Tag = as || 'p';

  return (
    <Component
      as={Tag}
      ref={ref}
      style={style}
      className={`${className}`}
      {...otherProps}>
      {
        children
      }
    </Component>
  )
})

HamMenuTitle.displayName = 'HamMenuTitle'

export default HamMenuTitle;