import React, { ReactNode, CSSProperties } from 'react';
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
declare const HamMenuContents: React.ForwardRefExoticComponent<Omit<HamMenuContentsProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default HamMenuContents;
