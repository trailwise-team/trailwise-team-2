import NextAuth from "next-auth";
import { authConfig } from "./auth.config";// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt'; // NextAuth.js

export async function middleware(req: NextRequest) {
    console.log(process.env.AUTH_SECRET)
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const protectedPaths = ['/Template', '/park/:path*'];

  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path)) && !token) {
    const loginUrl = new URL('/Login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/Template', '/park/:path*'],
};


export default NextAuth(authConfig).auth;
