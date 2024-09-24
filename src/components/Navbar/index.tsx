"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export const Navbar = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>(
    Cookies.get("accessTokenCookie")
  );

  useEffect(() => {
    const handleCookieChange = () => {
      setAccessToken(Cookies.get("accessTokenCookie"));
    };

    const interval = setInterval(handleCookieChange, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-x-3 text-2xl">
      {accessToken ? (
        <Link href="profile">Profile </Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};
