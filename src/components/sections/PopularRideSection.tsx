'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import popularRideData from '@/data/popular-ride.json';

interface Client {
  id: number;
  name: string;
  logo: string;
}

interface PopularRideSectionProps {
  clients: Client[];
}

export default function PopularRideSection({ clients }: PopularRideSectionProps) {
  const { title, subtitle, features } = popularRideData.popularRide;

  return (
    <section className="py-16" style={{ backgroundColor: '#F8F3ED' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 80,
              },
            }}
            className="client-logo-slider"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id} className="flex items-center justify-center">
                <div className="relative group">
                  {/* Logo Container */}
                  <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center bg-gray-50 rounded-lg p-4 transition-all duration-300 group-hover:bg-gray-100 group-hover:shadow-lg">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Client Name Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    {client.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <React.Fragment key={feature.id}>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature.text}
                </span>
                {index < features.length - 1 && <span className="text-gray-400">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}