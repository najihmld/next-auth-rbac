'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import Header from '@/features/marketing/ui/header';
import HeroSection from '@/features/marketing/ui/hero-section';

import FeatureHighlightsSection from '../../features/marketing/ui/feature-highlights-section';
import WhatWeDoSection from '../../features/marketing/ui/what-we-do-section';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureHighlightsSection />
      <WhatWeDoSection />
    </>
  );
}
