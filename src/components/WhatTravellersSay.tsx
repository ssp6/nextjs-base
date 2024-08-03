import * as React from 'react'

import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { TestimonialCard } from './TestimonialCard'

const testimonials = [
  {
    text: "This trip was life-changing! The balance of adventure, relaxation, and meaningful conservation work was perfect. Raja Ampat's underwater world is breathtaking. Highly recommend for sustainable travel lovers!",
    name: 'Sarah L.',
    title: 'Environmental Scientist',
    profileImage: '/images/sarah-l.png',
    locationImage: '/images/sarah-l-trip.png',
    color: '#5EC053',
  },
  {
    text: "Incredible 6-week adventure! Great mix of culture, nature, and community work. The guides were knowledgeable and passionate. Seeing the impact of our conservation efforts was amazing. Can't wait for another tour!",
    name: 'John D.',
    title: 'Photographer',
    profileImage: '/images/john-d.png',
    locationImage: '/images/john-d-trip.png',
    color: '#5CC3CB',
  },
  {
    text: 'The perfect combination of exploring local culture, enjoying nature, and engaging in meaningful conservation efforts. The guides were exceptionally knowledgeable and friendly. Helping with beach clean-ups and tree planting felt truly impactful. Already planning my next eco-adventure!',
    name: 'Peter P.',
    title: 'Musician',
    profileImage: '/images/peter-p.png',
    locationImage: '/images/peter-p-trip.png',
    color: '#de7593',
  },
  {
    text: "Amazing 2-week eco-friendly trip! Perfect blend of culture, nature, and conservation work. The guides were knowledgeable and passionate. Participating in beach clean-ups and tree planting was inspiring. Can't wait for another eco-tour!",
    name: 'Sally H.',
    title: 'Nurse',
    profileImage: '/images/sally-h.png',
    locationImage: '/images/sally-h-trip.png',
    color: '#a734d2',
  },
]

const spacing = '32px'
export const WhatTravellersSay = () => {
  return (
    <Carousel className="w-full" opts={{ align: 'start' }}>
      <CarouselContent className={`-ml-${spacing}`}>
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className={`pl-${spacing} md:basis-1/2 py-2`}
          >
            <TestimonialCard testimonial={testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselButtons numberOfSlides={testimonials.length} />
    </Carousel>
  )
}
