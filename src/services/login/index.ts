import { baseApi } from "../basic";

import { CheckOtpCode, CheckOtpRes, SendOtp, WhoAmIRes } from "./types";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    whoami: builder.query<WhoAmIRes, void>({
      query: () => ({
        url: "/user/whoami",
        method: "GET",
      }),
      // providesTags: ["user"],
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

    chekRefreshToken: builder.mutation<CheckOtpRes, CheckOtpRes>({
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
