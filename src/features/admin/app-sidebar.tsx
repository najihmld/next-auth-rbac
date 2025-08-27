'use client';

import { useMemo } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Home, Settings, Users } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { Button } from '../../components/ui/button';
import { useLogout } from '../../features/auth/api/use-logout';
import { checkRouteAccess } from '../../lib/permissions';
import { useAuthStore } from '../../stores/use-auth-store';

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Users',
    url: '/users',
    icon: Users,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { logout } = useLogout();
  const user = useAuthStore((state) => state.user);

  const accessibleMenuItems = useMemo(
    () =>
      items.filter((item) =>
        checkRouteAccess(item.url, user?.permissions || [])
      ),
    [user?.permissions]
  );

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className='bg-gray-400/20 p-2'>
            <h3>
              Welcome: <strong>{user?.name}</strong>
            </h3>
          </SidebarGroupContent>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accessibleMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <Separator />
            <Button
              onClick={logout}
              className='mt-4'
              size='sm'
              variant='destructive'
            >
              Logout
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
