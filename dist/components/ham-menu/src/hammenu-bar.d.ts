import React from 'react';
import { MotionProps } from 'framer-motion';
type MotionDivProps = Omit<React.HTMLProps<HTMLElement>, 'onAnimationStart' | 'onAnimationEnd' | 'ref' | 'as'> & MotionProps;
interface HamMenuBarProps extends MotionDivProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    motionProp?: {
        initial: any;
        enter: any;
        exit: any;
    };
}
export declare const HamMenuBar: React.ForwardRefExoticComponent<HamMenuBarProps & React.RefAttributes<HTMLElement>>;
export default HamMenuBar;
