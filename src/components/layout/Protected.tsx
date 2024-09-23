"use client";

import { ReactNode, useEffect } from "react";

import Cookies from "js-cookie";

import { useChekRefreshTokenMutation } from "@/services/login";

export const Protected = ({ children }: { children: ReactNode }) => {
  const refreshTokenCookie = Cookies.get("refreshTokenCookie");

  const accessTokenCookie = Cookies.get("accessTokenCookie");

  const [getNewToken] = useChekRefreshTokenMutation();

  useEffect(() => {
    const fetchData = async () => {
      if (!accessTokenCookie && refreshTokenCookie) {
        const { data } = await getNewToken(refreshTokenCookie);
        Cookies.set("accessTokenCookie", data.accessToken, {
          expires: 1 * 24 * 60 * 60,
        });
      }
    };
    fetchData();
  }, [accessTokenCookie, getNewToken, refreshTokenCookie]);

  return <>{children}</>;
};
