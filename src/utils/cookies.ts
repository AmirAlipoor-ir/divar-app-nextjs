import Cookies from "js-cookie";

import { jwtDecode } from "jwt-decode";

import { CheckOtpRes } from "./type";

export const setCookies = ({ data }: { data: CheckOtpRes }) => {
  const getExpireDate = (token: string) => {
    const expInSeconds = jwtDecode(token).exp;
    const expInMilliseconds = expInSeconds * 1000;
    return new Date(expInMilliseconds);
  };

  const accessTokenExpireDate = getExpireDate(data.accessToken);
  const refreshTokenExpireDate = getExpireDate(data.refreshToken);

  Cookies.set("accessTokenCookie", data.accessToken, {
    expires: accessTokenExpireDate,
  });

  Cookies.set("refreshTokenCookie", data.refreshToken, {
    expires: refreshTokenExpireDate,
  });

  console.log("Access Token Expiration:", accessTokenExpireDate);
  console.log("Refresh Token Expiration:", refreshTokenExpireDate);
};
