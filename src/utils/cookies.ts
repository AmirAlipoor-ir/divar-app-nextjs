"use client";

import Cookies from "js-cookie";

import { CheckOtpRes } from "./type";

export const setCookies = ({ data }: { data: CheckOtpRes }) => {
  Cookies.set("accessTokenCookie", data.accessToken, {
    expires: 1 * 24 * 60 * 60,
  });

  Cookies.set("refreshTokenCookie", data.refreshToken, {
    expires: 30 * 24 * 60 * 60,
  });
};
