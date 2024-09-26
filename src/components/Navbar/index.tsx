"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import Cookies from "js-cookie";

import { useWhoamiQuery } from "@/services/login";


import Image from "next/image";

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

  const { data } = useWhoamiQuery();

  return (
    <>
      <div className="flex justify-between items-center text-2xl">
        <Link
          className="border-2 p-2 rounded-md bg-red-500 text-white"
          href="/dashboard"
        >
          add poster
        </Link>
        {data?.role == "USER" && <Link href="admin">Admin</Link>}
        {/* {accessToken ? (
          <Link href="/profile">Profile</Link>
        ) : (
          <Link href="/login">Login</Link>
        )} */}
        <Link href="/">
          <Image src="/divar.svg" alt="divar" width={50} height={50}    />
        </Link>
      </div>
      <hr className="w-full bg-slate-400 mt-3" />
    </>
  );
};
