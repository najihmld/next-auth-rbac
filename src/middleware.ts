import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { Role, checkAccess } from './lib/permissions';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;

  // Mock user mapping
  const userMap: Record<string, { role: string }> = {
    'mock-token-admin': { role: 'admin' },
    'mock-token-guest': { role: 'guest' },
    'mock-token-editor': { role: 'editor' },
  };

  const user = token ? userMap[token] : null;

  const hasAccess = checkAccess(pathname, user?.role as Role);

  if (!hasAccess) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/users/:path*', '/settings/:path*'],
};
