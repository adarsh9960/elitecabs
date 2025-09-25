'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Keyboard } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import FancyButton from './FancyButton';
import 'swiper/css';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCta: string;
  secondaryCta: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <section id="home" className="relative h-[600px] md:h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Parallax, Keyboard]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        parallax={true}
        keyboard={{ enabled: true }}
        navigation={false}
        pagination={false}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl p-6 rounded-xl" style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4.5px)' }}>
                  <div className="mb-4">
                    <span className="text-primary font-semibold text-lg uppercase tracking-wide">
                      {slide.subtitle}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <FancyButton variant="booking" className="animate-popup">
                      {slide.primaryCta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </FancyButton>
                    <FancyButton variant="secondary" className="animate-popup">
                      {slide.secondaryCta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </FancyButton>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile-specific styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .swiper-slide {
            padding-top: 56.25%; /* 16:9 aspect ratio */
          }
          .swiper-slide img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      `}</style>
    </section>
  );
}
