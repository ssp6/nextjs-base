'use client'

import React from 'react'
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

export const WhatTravellersSay = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={'flex flex-row gap-x-6 items-center justify-start w-full'}
      >
        <TestimonialCard testimonial={testimonials[0]} />
        <TestimonialCard testimonial={testimonials[1]} />
      </div>
    </div>
  )
}
