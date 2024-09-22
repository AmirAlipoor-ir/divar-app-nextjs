import { ReactNode } from "react";

import type { Metadata } from "next";

import Provider from "@/components/Providers";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ProtuctedUser } from "@/components/layout/protucteduser";

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
      <ProtuctedUser>
        <html lang="en">
          <body>
            <Navbar />
            <hr className="w-full bg-slate-200" />
            {children}
          </body>
        </html>
      </ProtuctedUser>
    </Provider>
  );
}
