export type Role = 'guest' | 'admin' | 'editor';

// Define route permissions
const routePermissions: Record<string, Role[]> = {
  '/dashboard': ['admin', 'editor'],
  '/users': ['admin', 'editor'],
  '/settings': ['admin'],
};

export function checkAccess(path: string, role: Role = 'guest'): boolean {
  for (const [route, roles] of Object.entries(routePermissions)) {
    if (path.startsWith(route)) {
      return roles.includes(role);
    }
  }
  return true; // default: allow
}
