import { User } from '../stores/use-auth-store';

export function generateMockToken(user: User) {
  const header = Buffer.from(
    JSON.stringify({ alg: 'HS256', typ: 'JWT' })
  ).toString('base64url');

  const payload = Buffer.from(
    JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role,
      permissions: user.permissions,
    })
  ).toString('base64url');

  // No real signature, just mock
  const signature = 'mocksignature';

  return `${header}.${payload}.${signature}`;
}

export function decodeMockToken(token: string) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) throw new Error('Invalid token format');

    const payload = parts[1]; // ambil bagian tengah
    const decoded = Buffer.from(payload, 'base64url').toString('utf8');
    return JSON.parse(decoded);
  } catch (err) {
    console.log(err);
    return null; // token rusak / gagal decode
  }
}
