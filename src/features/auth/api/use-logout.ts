'use client';

import { useRouter } from 'next/navigation';

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
      });

      if (!res.ok) {
        throw new Error('Failed to logout');
      }

      // Redirect setelah logout
      router.push('/login');
      router.refresh(); // biar state client re-render
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return { logout };
}
