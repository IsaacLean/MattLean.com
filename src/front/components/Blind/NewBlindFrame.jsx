import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import NewBlind from './NewBlind'

/**
 * Blind Frame
 * Frame used for positioning blind animation
 * @prop {children} [children] Children
 * @prop {string} [className] Class attribute to append to default value
 * @prop {number} [delay] Delay in seconds
 * @prop {number} [duration] Duration in seconds
 * @prop {string} [href] href attribute value used if nodeType is "a"
 * @prop {string} [nodeType='span'] Determine's blind frame's element. Defaults to span element.
 * @prop {Object} [observer] Used to disconnect observer after animation is complete
 * @prop {boolean} [play] Flag that controls if animation is played
 * @prop {string} [rel] rel attribute value used if nodeType is "a"
 * @prop {tabIndex} [tabIndex] tabindex attribute value
 * @prop {string} [target] target attribute value used if nodeType is "a"
 * @prop {string} [to] to prop value used if nodeType is "Link"
 */
const BlindFrame = (
  {
    children,
    className,
    delay,
    duration,
    href,
    nodeType,
    observer,
    play,
    rel,
    tabIndex,
    target,
    to,
  },
  ref
) => {
  let cn = 'blind-frame'
  if (className) cn += ` ${className}`

  const content = (
    <>
      <NewBlind
        ref={ref}
        delay={delay}
        duration={duration}
        observer={observer}
        play={play}
        className={cn}
      />
      {children}
    </>
  )

  if (nodeType === 'a') {
    return (
      <a href={href} rel={rel} target={target} className={cn}>
        {content}
      </a>
    )
  } else if (nodeType === 'Link') {
    return (
      <Link to={to} className={cn}>
        {content}
      </Link>
    )
  }

  const Node = nodeType || 'span'

  return (
    <Node tabIndex={tabIndex} className={cn}>
      {content}
    </Node>
  )
}

export default forwardRef(BlindFrame)