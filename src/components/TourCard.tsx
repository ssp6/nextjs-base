import { type FC } from 'react'
import Image from 'next/image'

type Props = {
  imageUrl: string
  location: string
  price: string
  duration: string
}

export const TourCard: FC<Props> = ({
  imageUrl,
  location,
  price,
  duration,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-all duration-300">
      <Image
        src={imageUrl}
        alt={`${location} image`}
        width={500}
        height={400}
        className="w-full h-[400px] object-cover"
      />
      <div className="p-6 absolute bottom-0 w-full text-white">
        <p className="">
          {duration} - From {price}
        </p>
        <h3 className="text-xl font-bold">{location}</h3>
      </div>
    </div>
  )
}
