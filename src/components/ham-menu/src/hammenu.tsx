import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { ButtonProvider } from './hammenu-provider';

const StyledHamMenu = styled.section`
`;

interface HamMenuProps extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

const HamMenu = forwardRef<HTMLElement, HamMenuProps>((props, ref: Ref<HTMLElement>) => {
  const { children, as, className, style, ...otherProps } = props;
  const Tag = as || 'section';

  return (
    <ButtonProvider>
      <StyledHamMenu as={Tag} className={`${className}`} ref={ref} {...otherProps} style={style}>
        {children}
      </StyledHamMenu>
    </ButtonProvider>
  );
});

HamMenu.displayName = "HamMenu";

export default HamMenu;

