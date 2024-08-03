import React, { type SVGProps } from 'react'

export const EvLogo: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 48,
  height = 44,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 44"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 39C0.166667 38.3333 3.8 29.6 17 0H23L31.5 27.5L39 0H48L35.5 42.5H27.5L19 13L16 21.5L20 24V29.5H13V36H23V43.5H0V39Z"
        fill={'inherit'}
      />
    </svg>
  )
}
