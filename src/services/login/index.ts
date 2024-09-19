import { todoSplitApi } from "../basic";
import { CheckOtpRes, SendOtp } from "./types";

const extendedApi = todoSplitApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),

  overrideExisting: false,
});
export const { useSendOtpMutation, useCheckOtpMutation } = extendedApi;
