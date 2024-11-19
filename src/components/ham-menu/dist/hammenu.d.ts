import React from 'react';
interface HamMenuProps extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
    as?: React.ElementType;
    children?: React.ReactNode;
}
declare const HamMenu: React.ForwardRefExoticComponent<Omit<HamMenuProps, "ref"> & React.RefAttributes<HTMLElement>>;
export default HamMenu;
