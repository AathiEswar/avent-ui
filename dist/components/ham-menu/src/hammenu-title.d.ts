import React, { ElementType } from 'react';
interface HamMenuTitleProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    as?: ElementType;
    className?: string;
}
declare const HamMenuTitle: React.ForwardRefExoticComponent<HamMenuTitleProps & React.RefAttributes<HTMLParagraphElement>>;
export default HamMenuTitle;
