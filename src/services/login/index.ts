import { todoSplitApi } from "../basic";
import { AddTodoRes } from "./types";

const extendedApi = todoSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation<AddTodoRes, string>({
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
