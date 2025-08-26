'use client';

import { createMutation } from 'react-query-kit';

import { User } from '@/stores/use-auth-store';

type LoginVariables = { email: string; password: string };
type LoginResponse = {
  token: string;
  user: User;
};

export const useLoginMutation = createMutation<LoginResponse, LoginVariables>({
  mutationFn: async (variables) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(variables),
    });

    if (!res.ok) {
      throw new Error('Invalid credentials');
    }

    return res.json();
  },
});
