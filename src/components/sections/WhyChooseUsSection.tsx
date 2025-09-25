'use client';

import React from 'react';
import { Clock, Shield, DollarSign, Users, Star, Phone } from 'lucide-react';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  features: Feature[];
}

const iconMap = {
  Clock,
  Shield,
  DollarSign,
  Users,
  Star,
  Phone,
};

export default function WhyChooseUsSection({ features }: WhyChooseUsSectionProps) {
  const IconComponent = ({ iconName }: { iconName: string }) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="h-12 w-12 text-primary" /> : null;
  };

  return (
    <section id="why-choose-us" className="py-16" style={{ backgroundColor: '#F8F3ED' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Elite Cabs 24X7
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand out from the competition with our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent iconName={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Trust Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Commitment to Excellence
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With years of experience in the transportation industry, we have built a reputation for reliability, 
                safety, and exceptional service. Our commitment to customer satisfaction drives everything we do, 
                from maintaining our vehicles to training our drivers.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">60K+</div>
                  <p className="text-muted-foreground text-sm">clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">175+</div>
                  <p className="text-muted-foreground text-sm">Vehicle Fleet</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">24X7</div>
                  <p className="text-muted-foreground text-sm">Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}