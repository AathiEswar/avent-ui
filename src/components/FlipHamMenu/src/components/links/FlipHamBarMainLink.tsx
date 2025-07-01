import React from 'react'
import { FlipHamBarMainLinkProps } from '../../types'

const FlipHamBarMainLink = ({href , label}: FlipHamBarMainLinkProps) => {
  return (
    <a
      className='fhb-mb-link-mainflex items-center font-semibold h-full'
      href={`${href}`}
      style={{
        paddingLeft: "20%",
      }}
      aria-label={`${label}`} >
      {label}
    </a>
  )
}

export default FlipHamBarMainLink
