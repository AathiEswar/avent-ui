import React from "react";
import { MotionProps } from "framer-motion";
type MotionLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onDragStart' | 'onDragEnd' | 'onDrag'> & MotionProps;
interface HamMenuMainLinkProps extends MotionLinkProps {
    children: React.ReactNode;
    className?: string;
    as?: any;
    style?: React.CSSProperties;
    index?: number;
    slide: {
        initial: any;
        enter: any;
        exit: any;
    };
}
declare const HamMenuMainLink: React.ForwardRefExoticComponent<HamMenuMainLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default HamMenuMainLink;
