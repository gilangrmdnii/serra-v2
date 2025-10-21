"use client";

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import TrustedBySection from './components/TrustedBySection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import LoanSimulator from './components/LoanSimulator';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FormSection from './components/FormSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductsSection from './components/ProductsSection';
import ScrollToTopButton from './components/ScrollToTopButton';


export default function SerraLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <BenefitsSection />
      <WhyChooseUsSection />
      <LoanSimulator />
      <ProductsSection />
      <FormSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
} 