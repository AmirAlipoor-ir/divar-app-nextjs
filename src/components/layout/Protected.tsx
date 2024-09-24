"use client";

import { ReactNode, useEffect } from "react";

import Cookies from "js-cookie";

import { jwtDecode } from "jwt-decode";

import { useChekRefreshTokenMutation } from "@/services/login";

export const Protected = ({ children }: { children: ReactNode }) => {
  const refreshTokenCookie = Cookies.get("refreshTokenCookie");

  const accessTokenCookie = Cookies.get("accessTokenCookie");

  const [getNewToken] = useChekRefreshTokenMutation();

  useEffect(() => {
    const fetchData = async () => {
      if (!accessTokenCookie && refreshTokenCookie) {
        const { data } = await getNewToken(refreshTokenCookie);

        const getExpireDate = (token: string) => {
          const expInSeconds = jwtDecode(token).exp;
          const expInMilliseconds = expInSeconds * 1000;
          return new Date(expInMilliseconds);
        };

        const accessTokenExpireDate = getExpireDate(data.accessToken);

        Cookies.set("accessTokenCookie", data.accessToken, {
          expires: accessTokenExpireDate,
        });
      }
    };
    fetchData();
  }, [accessTokenCookie, getNewToken, refreshTokenCookie]);

  return <>{children}</>;
};

