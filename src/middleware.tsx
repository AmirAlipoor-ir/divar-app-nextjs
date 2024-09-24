import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessTokenCookie");

  const isRootProfile = req.nextUrl.pathname === "/profile";

  if (isRootProfile && !accessToken) {
    // Redirect to the login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
