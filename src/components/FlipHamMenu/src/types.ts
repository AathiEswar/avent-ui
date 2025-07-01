import { HTMLMotionProps, Variants } from "framer-motion"
import React, { HTMLAttributes, ReactNode } from "react"

export type FlipMenuBarProps =
  HTMLMotionProps<"div"> &
  {
    children?: ReactNode
  }

export type NavLink = {
  text: string,
  href: string
}

export type FlipHamMenuProps = HTMLAttributes<HTMLDivElement> & {
  openMenuLabel?: string,
  closeMenuLabel?: string,
  children: ReactNode,
  enableNavLinkHoverAnim?: boolean
}

export type FlipHamButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
}

export type FlipHamCloseButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  closeMenuLabel?: string
}

export type FlipHamOpenButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  openMenuLabel?: string
}

export type FlipHamBarLinksProps =
  HTMLMotionProps<'div'> & {
    index: number,
    label: string,
    href: string,
    hoverClassName?: string,
    hoverStyle?: React.CSSProperties
  }

export type FlipHamBarAnimLinkProps = {
  href: string,
  label: string,
  className?: string,
  style?: React.CSSProperties
}

export type FlipHamBarMainLinkProps = {
  href: string,
  label: string
}

export interface FlipHamMenuProviderProps {
  children: ReactNode;
  variants: Variants;
  initialActive?: boolean;
  enableNavLinkHoverAnim?: boolean;
}

export interface FlipHamMenuContextType {
  isActive: boolean;
  setActive: (active: boolean) => void;
  variants: Variants;
  handleActiveState: () => void,
  enableNavLinkHoverAnim?: boolean
}
