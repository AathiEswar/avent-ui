import React, { ReactNode, CSSProperties } from "react";
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
declare const HamMenuSubContent: React.ForwardRefExoticComponent<Omit<HamMenuSubContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default HamMenuSubContent;
