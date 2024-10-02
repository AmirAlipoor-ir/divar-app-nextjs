import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");

  const isRootProfile = req.nextUrl.pathname === "/dashboard";
  const isRootLogin = req.nextUrl.pathname === "/login";
  const isRootAdmin = req.nextUrl.pathname === "/admin";

  if (isRootProfile && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isRootLogin && accessToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!accessToken && isRootAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/login"],
};
