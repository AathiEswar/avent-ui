import { Variants } from "framer-motion"
import { Dispatch, SetStateAction } from "react"

export type FlipMenuBarProps = {
  variants: Variants,
  isActive: boolean,
  flipHamMenuNavLinks: NavLink[]
}

export type NavLink = {
  text: string,
  href: string
}

export type FlipHamMenuProps = {
  flipHamMenuNavLinks: NavLink[]
}

export type FlipHamButtonPropos = {
  isActive: boolean,
  setActive: Dispatch<SetStateAction<boolean>>
}