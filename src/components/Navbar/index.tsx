"use client";

import Link from "next/link";

import Image from "next/image";

import { useWhoamiQuery } from "@/services/login";

export const Navbar = () => {
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
        <Link href="/">
          <Image src="/divar.svg" alt="divar" width={50} height={50} />
        </Link>
      </div>
      <hr className="w-full bg-slate-400 mt-3" />
    </>
  );
};
