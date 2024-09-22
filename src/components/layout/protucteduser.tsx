"use client";

import { ReactNode, useEffect } from "react";

import Cookies from "js-cookie";

import { useChekRefreshTokenMutation } from "@/services/login";

export const ProtuctedUser = ({ children }: { children: ReactNode }) => {

  const refreshToken = Cookies.get("refreshTokenCookie");
  const accessToken = Cookies.get("accessTokenCookie");

  const [getnewtoken, { data }] = useChekRefreshTokenMutation();

  useEffect(() => {
    if (!accessToken && refreshToken) {
      getnewtoken(refreshToken);
      Cookies.set("accessTokenCookie", data?.accessToken);
    }
  });

  return <>{children}</>;
};
