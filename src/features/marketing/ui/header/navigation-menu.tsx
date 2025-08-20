'use client';

import * as React from 'react';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const products: { title: string; href: string; description: string }[] = [
  {
    title: 'Laptop Pro X',
    href: '/products/laptop-pro-x',
    description:
      'Powerful performance laptop with the latest generation processor and long battery life.',
  },
  {
    title: 'Smartphone Z',
    href: '/products/smartphone-z',
    description:
      'A flagship smartphone with stunning display and professional-grade camera system.',
  },
  {
    title: 'Wireless Earbuds',
    href: '/products/wireless-earbuds',
    description:
      'High-quality sound with noise cancellation and all-day comfort.',
  },
  {
    title: 'Gaming Monitor',
    href: '/products/gaming-monitor',
    description:
      'Ultra-fast refresh rate and vivid colors designed for immersive gaming experiences.',
  },
  {
    title: 'Mechanical Keyboard',
    href: '/products/mechanical-keyboard',
    description:
      'Tactile keys with customizable RGB lighting for productivity and gaming.',
  },
  {
    title: 'Smartwatch Series 5',
    href: '/products/smartwatch-series-5',
    description:
      'Track your health, fitness, and notifications right on your wrist.',
  },
];

export function HeaderNavigationMenu() {
  return (
    <NavigationMenu viewport={false} className='hidden md:block'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent'>
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent align='right'>
            <ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent'>
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent align='right'>
            <ul className='grid w-[200px] gap-4'>
              <li>
                <NavigationMenuLink asChild>
                  <Link href='#'>Temporary Works</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href='#'>Assets Management</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href='#'>Logistics</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href='#'>Access Control</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href='#'>Document Management</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href='#'>Planning</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='bg-transparent'>
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent align='right'>
            <ul className='grid w-[250px] gap-4'>
              <li>
                <NavigationMenuLink asChild>
                  <Link href='/about/company'>
                    <div className='font-medium'>Our Company</div>
                    <div className='text-muted-foreground'>
                      Learn more about our mission, vision, and values.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href='/about/team'>
                    <div className='font-medium'>Team</div>
                    <div className='text-muted-foreground'>
                      Meet the people behind the product.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href='/about/careers'>
                    <div className='font-medium'>Careers</div>
                    <div className='text-muted-foreground'>
                      Join our team and help build the future.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className='text-sm leading-none font-medium'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
