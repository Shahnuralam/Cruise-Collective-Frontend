import { NextRequest, NextResponse } from 'next/server';

const allowedIPs = process.env.ALLOWED_IPS?.split(',');

export function middleware(request: NextRequest) {
  const userIP =
    request.headers.get('x-forwarded-for') ||
    (request.headers.get('x-real-ip') as string);
  if (allowedIPs && allowedIPs.length > 0 && !allowedIPs.includes(userIP)) {
    return NextResponse.json(
      { error: 'Not authorized' },
      { status: 401, statusText: 'Not authorized' },
    );
  }

  const url = request.nextUrl.clone();
  const { pathname } = url;
  const PUBLIC_FILE = /\.(.*)$/;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Your logic for handling other routes

  return NextResponse.next();
}
