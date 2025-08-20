import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { HeaderNavigationMenu } from './navigation-menu';

function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Link href={'/'}>
            <Image
              priority
              alt='Logo'
              src={'/header-logo.png'}
              height={30}
              width={140}
              className='mx-2'
            />
          </Link>

          <div className='flex items-center space-x-2 md:space-x-4'>
            <HeaderNavigationMenu />

            <Button
              asChild
              variant={'outline'}
              className='flex items-center gap-2 rounded-full'
            >
              <Link href='#' className='dark:text-white'>
                Sign in
              </Link>
            </Button>

            <Button asChild className='flex items-center gap-2 rounded-full'>
              <Link href='#' className='dark:text-white'>
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
