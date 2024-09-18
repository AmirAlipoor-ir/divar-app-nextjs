import type { Metadata } from "next";

import Link from "next/link";

import "./globals.css";
import Provider from "@/components/Providers";

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body>
          <nav className="flex justify-center text-2xl">
            <Link href="/login">Login</Link>
          </nav>
          <hr className="w-full bg-slate-200" />
          {children}
        </body>
      </html>
    </Provider>
  );
}
