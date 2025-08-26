// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Mock user database
  const users = [
    { id: 1, email: 'admin@mail.com', password: '123', role: 'admin' },
    { id: 2, email: 'editor@mail.com', password: '123', role: 'editor' },
    { id: 3, email: 'viewer@mail.com', password: '123', role: 'viewer' },
  ];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  }

  // Simulasi set cookie JWT/token (di real case pakai sign JWT)
  const response = NextResponse.json({
    success: true,
    message: 'Login success',
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    token: `mock-token-${user.role}`, // biasanya JWT
  });

  response.cookies.set('token', `mock-token-${user.role}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60, // 1 jam
  });

  return response;
}
