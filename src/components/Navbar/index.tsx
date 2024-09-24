"use client";

import Cookies from "js-cookie";

import Link from "next/link";

export const Navbar = () => {
  const accessToken = Cookies.get("accessTokenCookie");

  return (
    <div className="flex justify-center gap-x-3 text-2xl">
      {accessToken ? (
        <Link href="profile">profile</Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

