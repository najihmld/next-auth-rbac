import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function FixWhatSection() {
  const items = [
    {
      title: 'Structured Temporary Works',
      description:
        'Digitize TW asset workflows from creation to striking, ensuring approvals, forms, and safety checks are always in place.',
    },
    {
      title: 'Smarter On-Site Coordination',
      description:
        'Give supervisors and workers clear, task-specific info through zones, drawings, and QR codes right from the field.',
    },
    {
      title: 'Built-In Compliance Tracking',
      description:
        'Automated workflows keep forms, permits, and approvals on track—so you never miss a step or risk a shutdown.',
    },
    {
      title: 'Centralized Document Control',
      description:
        'Store and manage all project documents in one place, with revision history, status tracking, and role-based access.',
    },
  ];

  return (
    <section className='bg-[#121C21]'>
      <div className='relative z-20 mx-auto max-w-7xl py-10 xl:py-20'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <h2 className='mx-auto max-w-5xl text-center text-xl font-extrabold tracking-tight text-white lg:text-[28px] lg:leading-tight'>
            Fix What Slows You Down
          </h2>

          <p className='mx-auto my-4 max-w-2xl text-center text-base font-normal text-white'>
            Disorganization, delays, and compliance gaps cost more than just
            time; they also cost trust and profit. Coordina solves the core
            issues that hold construction teams back.
          </p>
        </div>

        <HoverEffect className='lg:grid-cols-4' items={items} />
      </div>
    </section>
  );
}
