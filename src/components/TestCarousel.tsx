import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { TestimonialCard } from './TestimonialCard'

const testimonials = [
  {
    text: "This trip was life-changing! The balance of adventure, relaxation, and meaningful conservation work was perfect. Raja Ampat's underwater world is breathtaking. Highly recommend for sustainable travel lovers!",
    name: 'Sarah L.',
    title: 'Environmental Scientist',
    image: '/images/australia.png',
    color: '#5EC053',
  },
  {
    text: "Incredible 6-week adventure! Great mix of culture, nature, and community work. The guides were knowledgeable and passionate. Seeing the impact of our conservation efforts was amazing. Can't wait for another tour!",
    name: 'John D.',
    title: 'Photographer',
    image: '/images/australia.png',
    color: '#5CC3CB',
  },
  {
    text: "Incredible 6-week adventure! Great mix of culture, nature, and community work. The guides were knowledgeable and passionate. Seeing the impact of our conservation efforts was amazing. Can't wait for another tour!",
    name: 'John D.',
    title: 'Photographer',
    image: '/images/australia.png',
    color: '#5EC053',
  },
  {
    text: "Incredible 6-week adventure! Great mix of culture, nature, and community work. The guides were knowledgeable and passionate. Seeing the impact of our conservation efforts was amazing. Can't wait for another tour!",
    name: 'John D.',
    title: 'Photographer',
    image: '/images/australia.png',
    color: '#5CC3CB',
  },
]

const spacing = '32px'
export const CarouselSpacing = () => {
  return (
    <Carousel className="w-full" opts={{ align: 'start' }}>
      <CarouselContent className={`-ml-${spacing}`}>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className={`pl-${spacing} md:basis-1/2 py-2`}>
            <TestimonialCard testimonial={testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
