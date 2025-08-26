import { create } from 'zustand';

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

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  hasPermission: (permission) => {
    const user = get().user;
    if (!user) return false;
    return user.permissions.includes(permission);
  },
}));
