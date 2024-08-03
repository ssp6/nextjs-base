import Image from 'next/image'
import { ImageSharpCover } from './icons/image-sharp-cover'

/**
 * Hero image that is below hero text, with a color overlay and SVG and cuts off at the bottom of the screen
 */
export const HeroImage = () => (
  <div className="absolute h-screen w-full overflow-x-hidden overflow-y-hidden z-0 flex flex-col items-center">
    <Image
      src="/hero-image.webp"
      alt="Hero Image"
      fill
      quality={100}
      className="absolute inset-0 z-0 object-cover"
    />
    {/* Image overlay for color change */}
    <div className="absolute inset-0 bg-[rgb(5_6_21)] bg-opacity-70 z-[1] pointer-events-none"></div>
    <ImageSharpCover
      className={
        'bottom-0 z-10 w-full min-w-[1440px] h-auto absolute fill-white'
      }
    />
  </div>
)
