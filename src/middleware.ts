import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const PUBLIC_FILE = /\.(.*)$/;
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith('/static') || PUBLIC_FILE.test(pathname)) return NextResponse.next();

  // **

  return NextResponse.next();
}
