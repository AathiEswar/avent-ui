import { ForwardRefExoticComponent } from "react";
import React from 'react';
import { MotionProps } from 'framer-motion';
type MotionDivProps = Omit<React.HTMLProps<HTMLElement>, 'onAnimationStart' | 'onAnimationEnd' | 'ref' | 'as'> & MotionProps;
interface HamMenuBarProps extends MotionDivProps {
    children: React.ReactNode;
    className?: string;
    classNameInner?: string;
    classNameOuter?: string;
    as?: string | ForwardRefExoticComponent<any>;
    motionProp?: {
        initial: any;
        enter: any;
        exit: any;
    };
}
export declare const HamMenuBar: ForwardRefExoticComponent<HamMenuBarProps & React.RefAttributes<HTMLElement>>;
export default HamMenuBar;
