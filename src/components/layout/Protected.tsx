"use client";

import { ReactNode, useEffect } from "react";

import Cookies from "js-cookie";

import { useChekRefreshTokenMutation } from "@/services/login";

import { getExpireAccessDate } from "@/utils/cookies";

export const Protected = ({ children }: { children: ReactNode }) => {
  const refreshTokenCookie = Cookies.get("refreshTokenCookie");
  const accessTokenCookie = Cookies.get("accessTokenCookie");

  const [getNewToken] = useChekRefreshTokenMutation();

  useEffect(() => {
    const fetchData = async () => {
      const now = Math.floor(Date.now() / 1000);

      if (!accessTokenCookie && refreshTokenCookie) {
        const data = await getNewToken(refreshTokenCookie).unwrap();

        const accessTokenExpireDate: any = getExpireAccessDate(
          data.accessToken
        );

        Cookies.set("accessTokenCookie", data.accessToken, {
          expires: new Date(accessTokenExpireDate * 1000),
        });
      } else if (accessTokenCookie) {
        const accessTokenExpireDate: any =
          getExpireAccessDate(accessTokenCookie);

        if (accessTokenExpireDate - now <= 5) {
          if (refreshTokenCookie) {
            const data = await getNewToken(refreshTokenCookie);

            if (data.data?.accessToken) {
              const newAccessTokenExpireDate: any = getExpireAccessDate(
                data.data.accessToken
              );

              Cookies.set("accessTokenCookie", data.data.accessToken, {
                expires: new Date(newAccessTokenExpireDate * 1000),
              });
            }
          }
        }
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [accessTokenCookie, getNewToken, refreshTokenCookie]);

  return <>{children}</>;
};
