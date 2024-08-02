import Image from 'next/image'
import React, { type FC } from 'react'
import { Comments } from './icons/comments'

type Testimonial = {
  text: string
  name: string
  title: string
  image: string
  color: string
}

type Props = {
  testimonial: Testimonial
}

export const TestimonialCard: FC<Props> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-row w-full">
      <div className={'flex flex-col p-5'}>
        <div className={'mb-4 flex flex-row gap-x-3 items-center'}>
          <Comments className={'w-8 h-8'} fill={testimonial.color} />
          <div
            className={'w-full h-1 rounded-full bg-black opacity-50'}
            style={{
              background: testimonial.color,
            }}
          />
        </div>
        <p className="text-slate-500 mb-8">{testimonial.text}</p>
        <div className={'flex flex-row items-center gap-x-2'}>
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={64}
            height={64}
            className="object-cover rounded-full w-16 h-16"
          />
          <div className={'flex flex-col'}>
            <p className={'font-semibold'}>{testimonial.name}</p>
            <p className={'text-slate-500'}>{testimonial.title}</p>
          </div>
        </div>
      </div>
      <div className={'self-stretch min-w-[150px] md:min-w-[200px]'}>
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={200}
          height={600}
          className="w-full h-full object-cover rounded-r-2xl"
        />
      </div>
    </div>
  )
}
