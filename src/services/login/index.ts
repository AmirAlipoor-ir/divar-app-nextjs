import { todoSplitApi } from "../basic";
import { CheckOtpRes, SendOtp, SendRefreshToken } from "./types";

const extendedApi = todoSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    whoami: builder.query({
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
    chekRefreshToken: builder.mutation<SendRefreshToken, string>({
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
  useSendOtpMutation,
  useCheckOtpMutation,
  useChekRefreshTokenMutation,
} = extendedApi;
