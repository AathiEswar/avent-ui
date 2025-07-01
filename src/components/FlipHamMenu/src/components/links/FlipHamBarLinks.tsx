import React from 'react'
import { motion } from 'motion/react'
import { perspective } from '../../utils/anim'
import { FlipHamBarLinksProps } from '../../types'
import { useFlipHamMenuContext } from '../../context/useFlipHamMenuContext'
import { cn } from '@avent-ui/utils'
import FlipHamBarMainLink from './FlipHamBarMainLink'
import FlipHamBarAnimLink from './FlipHamBarAnimLink'

const FlipHamBarLinks = (props: FlipHamBarLinksProps) => {
  const { index, label, href, className, style, hoverClassName, hoverStyle, ...otherProps } = props
  const { enableNavLinkHoverAnim } = useFlipHamMenuContext()
  return (
    <motion.div
      key={index}
      className={cn('fhb-link-wrapper overflow-hidden h-16 md:h-20 text-[40px] md:text-[60px] w-full', className)}
      style={{
        perspective: "120px",
        perspectiveOrigin: "top",
        ...style
      }}
      custom={index}
      variants={perspective}
      initial="initial"
      animate="enter"
      exit="exit"
      {...otherProps}
    >
      <motion.div
        style={{
          transition: "all 0.5s",
        }}
        className={cn('fhb-link-doub-wrapper relative h-full w-full flex flex-col top-0', enableNavLinkHoverAnim && 'hover:top-[-100%]')}
      >
        <FlipHamBarMainLink href={href} label={label} />

        {enableNavLinkHoverAnim &&
          <FlipHamBarAnimLink href={href} label={label} className={hoverClassName} style={hoverStyle} />
        }
      </motion.div>
    </motion.div>
  )
}

FlipHamBarLinks.displayName = "Flip Ham Bar Links"

export default FlipHamBarLinks
