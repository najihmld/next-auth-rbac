import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string[];
};

type AuthState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  hasPermission: (permission: string) => boolean;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      hasPermission: (permission) => {
        const user = get().user;
        if (!user) return false;
        return user.permissions.includes(permission);
      },
    }),
    {
      name: 'auth-storage', // key di localStorage
    }
  )
);
