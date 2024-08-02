import React from 'react'
import { container } from '../styles'
import { cnMerge } from '../styles/cnMerge'
import { EvLogo } from './icons/ev-logo'

const Footer: React.FC = () => {
  return (
    <footer className={'w-full bg-[#F4FAFB] py-10'}>
      <div className={cnMerge(container, 'flex flex-col gap-y-3')}>
        <div className={'w-full flex flex-row justify-between items-center'}>
          <div className="flex items-center">
            <EvLogo className={'w-7 fill-black'} />
            <span className="ml-2 text-black font-medium">
              Eco<span className="font-bold">Venture</span>
            </span>
          </div>
        </div>
        <div className={'w-full h-[1px] bg-slate-300'} />
        <div className={'w-full flex flex-row'}>
          © {new Date().getFullYear()}EcoVenture LLC
        </div>
      </div>
    </footer>
  )
}

export default Footer
