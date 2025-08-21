'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import FeatureHighlightsSection from '@/features/marketing/ui/feature-highlights-section';
import FixWhatSection from '@/features/marketing/ui/fix-what-section';
import Header from '@/features/marketing/ui/header';
import HeroSection from '@/features/marketing/ui/hero-section';
import WhatWeDoSection from '@/features/marketing/ui/what-we-do-section';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureHighlightsSection />
      <WhatWeDoSection />
      <FixWhatSection />
    </>
  );
}
