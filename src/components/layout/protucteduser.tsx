"use client";

import { ReactNode, useEffect } from "react";

import Cookies from "js-cookie";

import { useChekRefreshTokenMutation } from "@/services/login";

export const ProtuctedUser = ({ children }: { children: ReactNode }) => {
  const refreshTokenCookie = Cookies.get("refreshTokenCookie");
  const accessTokenCookie = Cookies.get("accessTokenCookie");

  const [getNewToken, { data }] = useChekRefreshTokenMutation();

  useEffect(() => {
    const fetchData = async () => {
      if (!accessTokenCookie && refreshTokenCookie) {
        const { data } = await getNewToken(refreshTokenCookie);
        Cookies.set("accessTokenCookie", data?.accessToken);
      }
      console.log(data?.accessToken);
    };
    fetchData();
  }, [accessTokenCookie, data?.accessToken, getNewToken, refreshTokenCookie]);

  return <>{children}</>;
};
