"use client";

import Cookies from "js-cookie";

import { CheckOtpRes } from "./type";

export const setCookies = ({ data }: { data: CheckOtpRes }) => {
  Cookies.set("accessTokenCookie", data.accessToken, { expires: 1 });
  Cookies.set("refreshTokenCookie", data.refreshToken, { expires: 30 });
};


