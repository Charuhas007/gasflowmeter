import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js Proxy (formerly Middleware) — runs before every request.
 *
 * Handles:
 *  1. www → non-www canonical redirect (301)
 *     e.g. www.gasflowmeter.net/any/path → gasflowmeter.net/any/path
 *
 * Note: HTTPS enforcement is handled by Hostinger at the server/CDN level.
 * The 301 page redirects are handled by next.config.ts `redirects()`.
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Strip www and redirect permanently
  if (host.startsWith('www.')) {
    const nonWwwHost = host.slice(4); // remove "www."
    const url = request.nextUrl.clone();
    url.host = nonWwwHost;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

// Run on all routes except Next.js internals and static assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|css|js)).*)',
  ],
};
