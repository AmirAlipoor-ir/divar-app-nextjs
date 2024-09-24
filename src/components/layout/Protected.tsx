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
      const now = Math.floor(Date.now() / 1000);

      const getExpireDate = (token: string) => {
        const { exp } = jwtDecode(token);

        return exp;
      };

      if (!accessTokenCookie && refreshTokenCookie) {
        const { data } = await getNewToken(refreshTokenCookie);

        const accessTokenExpireDate = getExpireDate(data.accessToken);

        Cookies.set("accessTokenCookie", data.accessToken, {
          expires: new Date(accessTokenExpireDate * 1000),
        });
      } else if (accessTokenCookie) {
        const accessTokenExpireDate = getExpireDate(accessTokenCookie);

        if (accessTokenExpireDate - now <= 5) {
          if (refreshTokenCookie) {
            const { data } = await getNewToken(refreshTokenCookie);

            if (data.accessToken) {
              const newAccessTokenExpireDate = getExpireDate(data.accessToken);

              Cookies.set("accessTokenCookie", data.accessToken, {
                expires: new Date(newAccessTokenExpireDate * 1000),
              });
            }
          }
        }
      }
    };

    fetchData();
  }, [accessTokenCookie, getNewToken, refreshTokenCookie]);

  return <>{children}</>;
};
