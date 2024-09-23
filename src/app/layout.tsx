import { ReactNode } from "react";

import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import { Provider } from "@/components/Provider";
import { Navbar } from "@/components/Navbar";
import { Protected } from "@/components/layout/Protected";

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
    <html lang="en">
      <Provider>
        <Protected>
          <body>
            <Toaster />
            <Navbar />
            <hr className="w-full bg-slate-200" />
            {children}
          </body>
        </Protected>
      </Provider>
    </html>
  );
}
