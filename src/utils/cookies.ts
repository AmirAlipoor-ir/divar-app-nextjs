import Cookies from "js-cookie";
import { CheckOtpRes } from "./type";

export const setCookies = ({ data }: { data: CheckOtpRes }) => {
  Cookies.set("accessTokenCookie", data.accessToken);
  Cookies.set("refreshTokenCookie", data.refreshToken, {
    expires: 1758300092,
  });
};
