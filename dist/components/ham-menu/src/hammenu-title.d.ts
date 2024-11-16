import React from 'react';
interface HamMenuTitleProps extends React.HTMLProps<HTMLParagraphElement> {
    children: React.ReactNode;
    style?: React.CSSProperties;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
}
declare const HamMenuTitle: React.ForwardRefExoticComponent<Omit<HamMenuTitleProps, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export default HamMenuTitle;
