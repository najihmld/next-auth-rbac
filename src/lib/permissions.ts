// export type Role = 'guest' | 'admin' | 'editor';

export const protectedRoutes = [
  {
    path: '/dashboard',
    requiredPermission: 'dashboard:access',
  },
  {
    path: '/users',
    requiredPermission: 'users:access',
  },
  {
    path: '/settings',
    requiredPermission: 'settings:access',
  },
];

export function checkRouteAccess(path: string, permissions: string[]): boolean {
  const matchedRoute = protectedRoutes.find(
    (route) => path.startsWith(route.path) // cocokkan prefix
  );

  if (!matchedRoute) {
    return true; // kalau path tidak ada di protectedRoutes, berarti bebas diakses
  }

  return permissions.includes(matchedRoute.requiredPermission);
}
