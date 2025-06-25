import React, { forwardRef, Ref } from 'react';
import { ButtonProvider } from './hammenu-provider';

interface HamMenuProps extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

const HamMenu = forwardRef<HTMLElement, HamMenuProps>((props, ref: Ref<HTMLElement>) => {
  const { children, as, className, style, ...otherProps } = props;
  const Component = as || 'section';

  return (
    <ButtonProvider>
      <Component className={`${className}`} ref={ref} {...otherProps} style={style}>
        {children}
      </Component>
    </ButtonProvider>
  );
});

HamMenu.displayName = "HamMenu";

export default HamMenu;

