import React from 'react'
import Link from 'next/link'
import { EvLogo } from '@/components/icons/ev-logo'

// Animated the hover underline coming in from left
const linkClasses =
  'text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out'

export const Nav = () => {
  return (
    <nav className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between p-4 z-10 w-full relative">
        <div className="flex items-center">
          <EvLogo className={'w-7 fill-white'} />
          <span className="ml-1 text-white font-medium">
            Eco<span className="font-bold">Venture</span>
          </span>
        </div>
        <div className="flex space-x-4">
          <Link href="/packages" className={linkClasses}>
            Packages
          </Link>
          <Link href="/blog" className={linkClasses}>
            Blog
          </Link>
          <Link href="/contact" className={linkClasses}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
