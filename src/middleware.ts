import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { decodeMockToken } from './lib/mock-token';
import { checkRouteAccess } from './lib/permissions';
import { User } from './stores/use-auth-store';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;

  const user: User = token ? decodeMockToken(token) : null;

  const hasAccess = checkRouteAccess(pathname, user?.permissions);

  if (!hasAccess) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/users/:path*', '/settings/:path*'],
};
