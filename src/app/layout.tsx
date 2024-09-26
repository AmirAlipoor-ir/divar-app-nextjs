import { ReactNode } from "react";

import type { Metadata } from "next";

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
      <body className="mx-auto max-w-screen-xl mt-2">
        <Provider>
          <Protected>
            <Navbar />
            {children}
          </Protected>
        </Provider>
      </body>
    </html>
  );
}
