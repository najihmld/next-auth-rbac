import Image from 'next/image';

import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';

export default function WhatWeDoSection() {
  const items = [
    {
      name: 'Streamline Temporary Works Management',
      desc: 'Create, track, and close out TW assets with structured workflows—from initial design to permits, approvals, and final striking—built for site safety and compliance.',
      image: '/images/marketing/what-we-do-1.png',
    },
    {
      name: 'Organize and Navigate Every Site',
      desc: 'Create sites, areas, and zones, view drawings by location, and draw asset polygons within zones for precise on-site planning.',
      image: '/images/marketing/what-we-do-2.png',
    },
  ];

  return (
    <section className="bg-[url('/images/marketing/what-we-do-bg.svg')] bg-cover bg-center bg-no-repeat py-10 xl:py-20">
      <div className='mx-auto max-w-7xl space-y-10 px-6'>
        {items.map((item, idx) => (
          <div
            key={item.name}
            className='flex flex-col-reverse items-center justify-between gap-x-10 gap-y-3 even:justify-end md:flex-row md:even:flex-row-reverse'
          >
            <div className='max-w-[444px] flex-1'>
              <motion.h3
                className='mb-2 text-xl font-extrabold md:text-[28px]'
                initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * (idx + 1),
                  ease: 'easeInOut',
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {item.name}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * (idx + 2),
                  ease: 'easeInOut',
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className='mb-4'>{item.desc}</p>
                <Button className='rounded-full' variant={'outline'}>
                  Learn more
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 * (idx + 3),
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                alt={item.name}
                src={item.image}
                width={637}
                height={401}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
