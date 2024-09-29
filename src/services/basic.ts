import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const LOGIN_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: LOGIN_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("accessTokenCookie");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["category","poster"],
  endpoints: () => ({}),
});
