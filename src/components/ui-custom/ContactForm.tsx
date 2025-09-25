'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FancyButton from './FancyButton';
import { createRipple } from '@/lib/button-utils';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  message: string;
}

export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    from: '',
    to: '',
    date: '',
    time: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData);
      
      if (onSubmit) {
        onSubmit(formData);
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        from: '',
        to: '',
        date: '',
        time: '',
        message: '',
      });

      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="from">Pickup Location *</Label>
          <Input
            id="from"
            name="from"
            type="text"
            required
            value={formData.from}
            onChange={handleChange}
            placeholder="Enter pickup location"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="to">Destination *</Label>
          <Input
            id="to"
            name="to"
            type="text"
            required
            value={formData.to}
            onChange={handleChange}
            placeholder="Enter destination"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date *</Label>
          <Input
            id="date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Preferred Time *</Label>
        <Input
          id="time"
          name="time"
          type="time"
          required
          value={formData.time}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Any additional information or special requirements..."
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <FancyButton type="submit" disabled={isSubmitting} className="flex-1">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </FancyButton>
        <div className="flex gap-2">
          <a
            href="https://wa.me/917021751691"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-water bg-green-500 text-white border-green-500 hover:bg-green-600"
            onClick={createRipple}
          >
            <span className="label">WhatsApp</span>
          </a>
          <a
            href="tel:+917021751691"
            className="btn-water bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
            onClick={createRipple}
          >
            <span className="label">Call Now</span>
          </a>
        </div>
      </div>
    </form>
  );
}