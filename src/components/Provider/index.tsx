"use client";

import { ReactNode } from "react";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux-toolkit/store";
import { Toaster } from "react-hot-toast";

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <Toaster />
      {children}
    </ReduxProvider>
  );
};
