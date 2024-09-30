"use client";

import { ReactNode, useEffect } from "react";

import Cookies from "js-cookie";

import { useChekRefreshTokenMutation } from "@/services/login";

import { getExpireAccessDate } from "@/utils/cookies";

export const Protected = ({ children }: { children: ReactNode }) => {
  const refreshToken = Cookies.get("refreshTokenCookie");
  const accessToken = Cookies.get("accessTokenCookie");

  const [getNewToken] = useChekRefreshTokenMutation();

  useEffect(() => {
    const fetchData = async () => {
      const now = Math.floor(Date.now() / 1000);

      if (!accessToken && refreshToken) {
        const data = await getNewToken(refreshToken).unwrap();

        const accessTokenExpireDate = getExpireAccessDate(data.accessToken);

        Cookies.set("accessTokenCookie", data.accessToken, {
          expires: new Date(accessTokenExpireDate! * 1000),
        });
      } else if (accessToken) {
        const accessTokenExpireDate = getExpireAccessDate(accessToken);

        if (accessTokenExpireDate! - now <= 5) {
          if (refreshToken) {
            const data = await getNewToken(refreshToken);

            if (data.data?.accessToken) {
              const newAccessTokenExpireDate = getExpireAccessDate(
                data.data.accessToken
              );

              Cookies.set("accessTokenCookie", data.data.accessToken, {
                expires: new Date(newAccessTokenExpireDate! * 1000),
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
  }, [accessToken, getNewToken, refreshToken]);

  return <>{children}</>;
};
