import { todoSplitApi } from "../basic";
import { SendOtp } from "./types";

const extendedApi = todoSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation<SendOtp, string>({
      query: (number) => ({
        url: "/auth/send-otp",
        method: "POST",
        body:{
          mobile: number
        }
      }),
    }),
  }),

  overrideExisting: false,
});
export const { useSendOtpMutation } = extendedApi;
