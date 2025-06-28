import { Variants } from "framer-motion"
import React, { Dispatch, ReactNode, SetStateAction } from "react"

export type FlipMenuBarProps = {
  as?: string,
  className?: string
}

export type NavLink = {
  text: string,
  href: string
}

export type FlipHamMenuProps = {
  flipHamMenuNavLinks: NavLink[]
  openMenuLabel?: string,
  closeMenuLabel?: string,
  children: ReactNode
}

export type FlipHamButtonProps = {
  isActive: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
  openMenuLabel?: string,
  closeMenuLabel?: string,
}