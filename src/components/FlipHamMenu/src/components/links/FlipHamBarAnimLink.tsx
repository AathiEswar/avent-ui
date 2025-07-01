import React from 'react'
import { FlipHamBarAnimLinkProps } from '../../types'
import { cn } from '@avent-ui/utils'

const FlipHamBarAnimLink = ({ href, label, className, style }: FlipHamBarAnimLinkProps) => {
  return (
    <a className={cn('fhb-mb-link-anim h-full flex items-center justify-center max-md:mt-2 bg-black text-white', className)}
      style={{
        ...style
      }}
      href={href}
    >
      {[...Array(4)].map((_, index) => (
        <p
          key={index}
          className='em-link em-link-hover flex items-center slider-anim animate-slider font-semibold'
          style={{
            paddingLeft: "20%",
          }}
          aria-label={`${label}`} >
          {label}
        </p>))}
    </a>
  )
}

export default FlipHamBarAnimLink
