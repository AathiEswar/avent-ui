import { VariantProps } from "class-variance-authority";
import { CvaButtonVariants } from "./components/Button";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof CvaButtonVariants>['variant'],
  size?: VariantProps<typeof CvaButtonVariants>['size'],
  asChild?: boolean
}