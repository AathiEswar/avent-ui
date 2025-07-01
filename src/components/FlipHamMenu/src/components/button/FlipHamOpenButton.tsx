import React from 'react'
import { FlipHamOpenButtonProps } from '../../types';
import { cn } from '@avent-ui/utils';

const FlipHamOpenButton = (props: FlipHamOpenButtonProps) => {
  const { openMenuLabel, className, style, ...otherProps } = props;
  const openLabel = openMenuLabel || 'CLOSE'
  return (
    <div
      style={{
        ...style,
      }}
      className={cn('fhb-open-wrapper h-full w-full rounded-2xl max-md:text-xs bg-black text-white absolute top-[100%] flex items-center justify-center', className)}
      {...otherProps}
    >
      {openLabel}
    </div>
  )
}

FlipHamOpenButton.displayName = "Flip Ham Open Button"

export default FlipHamOpenButton
