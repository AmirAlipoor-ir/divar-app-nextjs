import { baseApi } from "../basic";

import { CheckOtpRes, SendOtp, CheckRefreshTokenRes } from "./types";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    whoami: builder.query<Response, void>({
      query: () => ({
        url: "/user/whoami",
        method: "GET",
      }),
    }),

    sendOtp: builder.mutation<SendOtp, string>({
      query: (mobile) => ({
        url: "/auth/send-otp",
        method: "POST",
        body: {
          mobile
        },
      }),
    }),

    checkOtp: builder.mutation<
      CheckOtpRes,
      { phoneNumber: string; otpCode: string }
    >({
      query: ({ phoneNumber, otpCode }) => ({
        url: "/auth/check-otp",
        method: "POST",
        body: {
          mobile: phoneNumber,
          code: otpCode,
        },
      }),
    }),

    chekRefreshToken: builder.mutation<CheckRefreshTokenRes, string>({
      query: (refreshToken) => ({
        url: "/auth/check-refresh-token",
        method: "POST",
        body: {
          refreshToken,
        },
      }),
    }),
  }),

  overrideExisting: false,
});
export const {
  useWhoamiQuery,
  useSendOtpMutation,
  useCheckOtpMutation,
  useChekRefreshTokenMutation,
} = loginApi;
