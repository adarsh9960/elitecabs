'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { createRipple } from '@/lib/button-utils';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
}

export default function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="py-16" style={{ backgroundColor: '#F8F3ED' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Booking your ride with Elite Cabs 24X7 is simple and hassle-free
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-8 bottom-8 w-0.5 bg-primary/20 transform md:-translate-x-0.5"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative flex items-center">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold z-10">
                    {step.id}
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-6 md:ml-0 flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right md:order-first'}`}>
                    <div className="bg-card rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-16 transform -translate-x-1/2 text-primary">
                      <ArrowRight className="h-6 w-6 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-card rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Book Your Ride?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience the convenience and comfort of Elite Cabs 24X7. 
                Whether you need a quick ride across town or a planned outstation trip, 
                we're here to serve you 24 hours a day, 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="btn-water bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                  onClick={createRipple}
                >
                  <span className="label">Book Now</span>
                </button>
                <button 
                  className="btn-water bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/90"
                  onClick={createRipple}
                >
                  <span className="label">Call Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}