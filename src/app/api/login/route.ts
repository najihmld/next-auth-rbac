// app/api/login/route.ts
import { NextResponse } from 'next/server';

import { generateMockToken } from '@/lib/mock-token';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Mock user database
  const users = [
    {
      id: 1,
      email: 'admin@mail.com',
      password: '123',
      name: 'Admin',
      role: 'admin',
      permissions: [
        'dashboard:access',

        'users:access',
        'users:add',
        'users:edit',
        'users:delete',

        'settings:access',
      ],
    },
    {
      id: 2,
      email: 'editor@mail.com',
      password: '123',
      name: 'Editor',
      role: 'editor',
      permissions: ['dashboard:access', 'users:access', 'users:edit'],
    },
    {
      id: 3,
      email: 'guest@mail.com',
      password: '123',
      name: 'Guest',
      role: 'guest',
      permissions: ['dashboard:access'],
    },
  ];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  }

  const token = generateMockToken(user);

  // Simulasi set cookie JWT/token (di real case pakai sign JWT)
  const response = NextResponse.json({
    success: true,
    message: 'Login success',
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
      permissions: user.permissions,
    },
    token,
  });

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60, // 1 jam
  });

  return response;
}
