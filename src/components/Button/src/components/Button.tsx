import React from 'react'
import { forwardRef } from 'react'
import { cva } from 'class-variance-authority';
import { cn } from "@avent-ui/utils"
import { ButtonProps } from '../types';

export const CvaButtonVariants = cva(
  "rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "bg-gray-900 text-white hover:bg-gray-800"
        ],
        outline: [
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
        ],
        secondary: [
          "bg-gray-200 text-gray-900 hover:bg-gray-300"
        ],
        ghost: [
          "text-gray-900 hover:bg-gray-100"
        ],
        link: [
          "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700"
        ],
        primary: [
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
        ],
        icon: [
          "text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full aspect-square p-0"
        ],
        success: [
          "bg-green-600 text-white hover:bg-green-700 shadow-sm"
        ],
        warning: [
          "bg-orange-600 text-white hover:bg-orange-700 shadow-sm"
        ],
        danger: [
          "bg-red-600 text-white hover:bg-red-700 shadow-sm"
        ]
      },
      size: {
        xs: "py-1 px-2 text-xs",
        sm: "py-1.5 px-3 text-sm",
        default: "py-2 px-4 text-base",
        lg: "py-3 px-8 text-lg",
        xl: "py-4 px-10 text-xl",
        icon: "p-2",
        "icon-sm": "p-1.5",
        "icon-lg": "p-3"
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      disabled: false
    },
    compoundVariants: [
      {
        variant: "default",
        disabled: true,
        className: "bg-gray-300 text-gray-500 hover:bg-gray-300"
      },
      {
        variant: "primary",
        disabled: true,
        className: "bg-gray-400 hover:bg-gray-400 text-gray-600"
      },
      {
        variant: "outline",
        disabled: true,
        className: "border-gray-300 bg-gray-100 text-gray-400 hover:bg-gray-100"
      },
      {
        variant: "ghost",
        disabled: true,
        className: "text-gray-400 hover:bg-transparent hover:text-gray-400"
      },
      {
        variant: "link",
        disabled: true,
        className: "text-gray-400 hover:no-underline"
      },
      {
        variant: "icon",
        size: "icon",
        className: "p-2"
      },
      {
        variant: "icon",
        size: "icon-sm",
        className: "p-1.5"
      },
      {
        variant: "icon",
        size: "icon-lg",
        className: "p-3"
      },
      {
        variant: "link",
        size: ["xs", "sm", "default", "lg", "xl"],
        className: "px-0"
      }
    ]
  }
)

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    className,
    variant,
    size,
    disabled,
    type = "button",
    ...props
  },
  ref) => {
  const airaLabel = props["aria-label"] || `A Custom Button of variant ${variant} and size ${size}`;
  return (
    <button
      ref={ref}
      type={type}
      aria-label={airaLabel}
      {...props}
      disabled={disabled}
      className={cn(CvaButtonVariants({ variant, size, disabled }), className)}
    />
  )
})

Button.displayName = "Button"


export default Button