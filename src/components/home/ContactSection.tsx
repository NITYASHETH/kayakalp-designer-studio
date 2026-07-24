'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    occasion: 'Bridal Lehenga',
    city: 'Delhi Atelier',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF9F6] text-[#1A1918]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-2">
                PRIVATE CONCIERGE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light">
                Book an <span className="font-bold italic text-[#C5A059]">Atelier Fitting</span>
              </h2>
              <p className="mt-4 text-sm text-[#666] font-light leading-relaxed">
                Experience 1-on-1 private bridal styling, custom made-to-measure fittings, and fabric customization with our senior couture designers.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#1A1918] p-3 text-[#D4AF37]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#1A1918]">Flagship Delhi Atelier</h4>
                    <p className="text-xs text-[#666] mt-0.5">D-42, South Extension Part II, New Delhi - 110049</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#1A1918] p-3 text-[#D4AF37]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#1A1918]">Mumbai Bridal Studio</h4>
                    <p className="text-xs text-[#666] mt-0.5">Altamount Road, Cumballa Hill, Mumbai - 400026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#1A1918] p-3 text-[#D4AF37]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#1A1918]">VIP Concierge Line</h4>
                    <p className="text-xs text-[#666] mt-0.5">+91 (011) 4988-7700 | WhatsApp: +91 98100 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#1A1918] p-3 text-[#D4AF37]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#1A1918]">Hours of Operation</h4>
                    <p className="text-xs text-[#666] mt-0.5">Monday – Sunday: 10:30 AM – 8:00 PM (By Appointment)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 border border-[#E5DFD3] bg-white p-8 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A059]/20 text-[#C5A059] mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1918]">
                  Consultation Request Received
                </h3>
                <p className="mt-2 text-sm text-[#666] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#1A1918]">{formData.name}</span>. Our Senior Bridal Stylist will contact you within 2 hours to confirm your appointment at <span className="font-semibold text-[#1A1918]">{formData.city}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-block border border-[#1A1918] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#1A1918] hover:bg-[#1A1918] hover:text-white transition"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#E5DFD3] pb-3">
                  <h3 className="font-serif text-xl font-bold text-[#1A1918]">
                    Reserve Private Consultation
                  </h3>
                  <p className="text-xs text-[#777]">Fill in your wedding details for customized bridal styling</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1918] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maharani Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-[#E5DFD3] px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1918] uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[#E5DFD3] px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1918] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#E5DFD3] px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1918] uppercase tracking-wider mb-2">
                      Wedding / Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full border border-[#E5DFD3] px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none text-[#555]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1918] uppercase tracking-wider mb-2">
                      Occasion Category
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full border border-[#E5DFD3] px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none text-[#1A1918]"
                    >
                      <option value="Bridal Lehenga">Bridal Lehenga</option>
                      <option value="Reception Gown">Reception Gown</option>
                      <option value="Sangeet Outfit">Sangeet Outfit</option>
                      <option value="Bridal Saree">Bridal Saree</option>
                      <option value="Groom Sherwani">Groom Sherwani</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1918] uppercase tracking-wider mb-2">
                      Preferred Studio Location
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full border border-[#E5DFD3] px-4 py-3 text-sm focus:border-[#C5A059] focus:outline-none text-[#1A1918]"
                    >
                      <option value="Delhi Atelier">Delhi Flagship Atelier (In-Person)</option>
                      <option value="Mumbai Studio">Mumbai Studio (In-Person)</option>
                      <option value="Virtual Video Appointment">Virtual VIP Appointment (Global)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1918] uppercase tracking-wider mb-2">
                    Customization & Measurement Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention preferred color palette, motif inspirations, or timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full border border-[#E5DFD3] p-4 text-sm focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 bg-[#1A1918] py-4 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase transition-all hover:bg-[#C5A059] hover:text-white"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Request VIP Fitting Slot</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
