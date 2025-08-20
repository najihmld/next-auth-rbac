'use client';

import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/ui/button';

const images = [
  '/images/marketing/hero-1.png',
  '/images/marketing/hero-2.png',
  '/images/marketing/hero-3.png',
];

export default function HeroSection() {
  return (
    <div className='relative h-[60vh] w-full overflow-hidden md:h-screen'>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass:
            'block w-1.5 h-2 rounded-full bg-white/50 transition-all duration-300 transform scale-100',
          bulletActiveClass: 'bg-white/90 h-6 shadow-lg',
        }}
        direction='vertical'
        className='h-full w-full'
        autoplay={{
          delay: 3000,
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className='h-[60vh] w-full bg-cover bg-center md:h-screen'
              style={{ backgroundImage: `url(${img})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='h-full w-full bg-black/60' />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='absolute inset-0 z-10 flex flex-col justify-center px-8 text-white md:px-16'>
        <div className='max-w-2xl'>
          <motion.h1
            className='mb-4 text-4xl leading-tight font-bold md:text-[57px]'
            initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1 * 1,
              ease: 'easeInOut',
            }}
          >
            Connected Teams Coordinated Projects
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1 * 2,
              ease: 'easeInOut',
            }}
          >
            <p className='mb-4 text-lg font-medium text-gray-200 md:text-xl xl:text-[22px]'>
              Manage your sites, coordinate teams, and keep every task on track.
              Your all-in-one solution for seamless construction Project
              management.
            </p>
            <Button
              size='lg'
              className='cursor-pointer rounded-full bg-[#00A3E0] !px-12 !py-6 !text-base font-bold hover:bg-[#00A3E0]'
            >
              Book a Demo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Custom Pagination  */}
      <div className='custom-pagination absolute top-1/2 right-6 z-20 flex -translate-y-1/2 flex-col items-center gap-2' />
    </div>
  );
}
