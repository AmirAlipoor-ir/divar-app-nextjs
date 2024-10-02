import { baseApi } from "../basic";

import {
  CheckOtpCode,
  CheckOtpRes,
  GetOtpRes,
  SendOtp,
  SendOtpRes,
  WhoAmIRes,
} from "./types";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    whoami: builder.query<WhoAmIRes, void>({
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
          mobile,
        },
      }),
    }),

    checkOtp: builder.mutation<CheckOtpRes, CheckOtpCode>({
      query: ({ phoneNumber, otpCode }) => ({
        url: "/auth/check-otp",
        method: "POST",
        body: {
          mobile: phoneNumber,
          code: otpCode,
        },
      }),
    }),

    chekRefreshToken: builder.mutation<GetOtpRes, SendOtpRes>({
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
