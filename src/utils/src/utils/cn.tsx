import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge"

function cn(classValue: ClassValue[]) {
  return (twMerge(clsx(...classValue)))
}

export default cn;