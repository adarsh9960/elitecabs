'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import FancyButton from '@/components/ui-custom/FancyButton';
import pricingData from '@/data/pricing.json';

export default function PricingSection() {
  const { title, subtitle, mainTitle, mainDescription, badge, categories, includedFeatures } = pricingData.pricing;

  return (
    <section id="pricing" className="py-16" style={{ backgroundColor: '#F8F3ED' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">{badge.text}</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {mainTitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {mainDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {categories.map((category) => (
                <div key={category.id} className="text-center p-6 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{category.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <FancyButton className="w-full">
                    {category.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </FancyButton>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">{includedFeatures.title}</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {includedFeatures.features.map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}