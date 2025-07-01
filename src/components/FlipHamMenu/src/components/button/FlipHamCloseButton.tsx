import React from 'react'
import { cn } from "@avent-ui/utils"
import { FlipHamCloseButtonProps } from '../../types';

const FlipHamCloseButton = (props: FlipHamCloseButtonProps) => {
  const { closeMenuLabel, className, style, ...otherProps } = props;
  const closeLabel = closeMenuLabel || 'MENU'
  return (
    <div
      style={{
        WebkitBackdropFilter: "blur(11.5px)",
        ...style,
      }}
      className={cn('fhb-close-wrapper h-full w-full rounded-2xl flex items-center justify-center em-button max-md:text-xs', className)}
      {...otherProps}
    >
      {closeLabel}
    </div>
  )
}

FlipHamCloseButton.displayName = "Flip Ham Close Button"

export default FlipHamCloseButton
