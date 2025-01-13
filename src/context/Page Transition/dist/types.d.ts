import { MotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";
export interface ReactBasicProp {
    children: ReactNode;
}
export declare const anim: (variants: Variants, custom?: any) => MotionProps;
