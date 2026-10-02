import { NextRequest } from 'next/server';

export const ADMIN_COOKIE_NAME = 'gasflow_admin_token';
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Flow@#0243Gas';
const TOKEN_SECRET = process.env.ADMIN_TOKEN_SECRET || 'gasflow-secret-token-key-2026';

export function createAdminToken(): string {
  const timestamp = Date.now();
  const payload = `${timestamp}:${TOKEN_SECRET}`;
  return Buffer.from(payload).toString('base64');
}

export function verifyAdminToken(token: string | null | undefined): boolean {
  if (!token) return false;
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const [timestampStr, secret] = decoded.split(':');
    if (secret !== TOKEN_SECRET) return false;
    const timestamp = parseInt(timestampStr, 10);
    // Token valid for 7 days
    const maxAgeMs = 7 * 24 * 60 * 60 * 1000;
    return Date.now() - timestamp < maxAgeMs;
  } catch {
    return false;
  }
}

export function isAuthenticated(request: NextRequest): boolean {
  const cookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const authHeader = request.headers.get('authorization')?.replace('Bearer ', '');
  return verifyAdminToken(cookie) || verifyAdminToken(authHeader);
}
