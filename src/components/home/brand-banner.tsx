'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Jhonatan Albert',
      location: 'Lombok, Indonesia',
      rating: 5.0,
      quote: 'THE SANTECO TUMBLER IS A GAME-CHANGER! IT KEEPS MY DRINKS HOT FOR HOURS AND COLD EVEN LONGER.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHq0nsMxLEv1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704344422059?e=1738800000&v=beta&t=lMhlRfv9Uo8ulMsk0XtLNqvwvaleAX4YdN7iuJhbH5g',
      thumbnail: 'https://media.licdn.com/dms/image/v2/D5603AQHq0nsMxLEv1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704344422059?e=1738800000&v=beta&t=lMhlRfv9Uo8ulMsk0XtLNqvwvaleAX4YdN7iuJhbH5g'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 4.5,
      quote: 'INCREDIBLE PRODUCT! THE QUALITY EXCEEDED MY EXPECTATIONS. HIGHLY RECOMMENDED!',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHfVlTvQvWMKA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726288720304?e=1738800000&v=beta&t=_pYuKNVwjSyrJMmiFSQt_BJcThEq46v61DQNmVyj1bg',
      thumbnail: 'https://media.licdn.com/dms/image/v2/D4D03AQHfVlTvQvWMKA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726288720304?e=1738800000&v=beta&t=_pYuKNVwjSyrJMmiFSQt_BJcThEq46v61DQNmVyj1bg'
    },
    {
      id: 3,
      name: 'Akira Tanaka',
      location: 'Tokyo, Japan',
      rating: 5.0,
      quote: 'PERFECT FOR MY DAILY COMMUTE. SLEEK DESIGN AND EXCEPTIONAL PERFORMANCE.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQG_DsF8NjF6wQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715545679949?e=1738800000&v=beta&t=Ukkly2ks6PuQUdXanNFLi6uI7_ZNPaiJ0S1YGGelb3U',
      thumbnail: 'https://media.licdn.com/dms/image/v2/D5603AQG_DsF8NjF6wQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715545679949?e=1738800000&v=beta&t=Ukkly2ks6PuQUdXanNFLi6uI7_ZNPaiJ0S1YGGelb3U'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-[#6B46C1] text-white px-6 py-2 rounded-lg mb-6">
          OUR CUSTOMER
        </div>
        <h2 className="text-5xl font-bold mb-8">
          SATISFACTION
          <br />
          GUARANTEED
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We Take Great Pride In The Satisfaction Of Our Clients, As Evidenced By Their Glowing Feedback About Our Exceptional Service.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-end gap-4 mb-8">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full border hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full border hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Testimonial Content */}
      <div className="flex items-start gap-8">
        {/* Thumbnails */}
        <div className="hidden md:flex flex-col gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-24 h-24 rounded-lg overflow-hidden ${
                index === currentSlide ? 'ring-2 ring-[#6B46C1]' : 'bg-gray-100'
              }`}
              onClick={() => setCurrentSlide(index)}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={testimonial.thumbnail}
                alt={`${testimonial.name} thumbnail`}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <Image
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  width={400}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
                <div className="mt-4">
                  <h3 className="text-2xl font-bold">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-600">{testimonials[currentSlide].location}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(testimonials[currentSlide].rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-300 text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg">{testimonials[currentSlide].rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <div className="text-[80px] text-gray-200 leading-none">"</div>
                <p className="text-2xl font-bold leading-tight">
                  {testimonials[currentSlide].quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

