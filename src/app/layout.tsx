import { ReactNode } from "react";

import type { Metadata } from "next";

import Link from "next/link";

import Provider from "@/components/Providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Divar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <Provider>
      <html lang="en">
        <body>
          <nav className="flex justify-center gap-x-3 text-2xl">
            <Link href="/login">Login</Link>
          </nav>
          <hr className="w-full bg-slate-200" />
          {children}
        </body>
      </html>
    </Provider>
  );
}
