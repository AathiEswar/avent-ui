import { MotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

export interface ReactBasicProp{
  children : ReactNode
}

// export const anim = (variants: Variants): MotionProps => ({
//   initial: "initial",
//   animate: "enter",
//   exit: "exit",
//   variants,
// });

export const anim = (variants: Variants  , custom? : any): MotionProps => ({
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants,
  custom
});