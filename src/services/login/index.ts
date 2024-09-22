import { todoSplitApi } from "../basic";

import { CheckOtpRes, SendOtp, CheckRefreshTokenRes } from "./types";

const extendedApi = todoSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    whoami: builder.query<unknown, void>({
      query: () => ({
        url: "/user/whoami",
        method: "GET",
      }),
    }),

    sendOtp: builder.mutation<SendOtp, string>({
      query: (number) => ({
        url: "/auth/send-otp",
        method: "POST",
        body: {
          mobile: number,
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
} = extendedApi;
