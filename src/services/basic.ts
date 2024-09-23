import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const LOGIN_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: LOGIN_URL }),
  tagTypes: ["user"],
  endpoints: () => ({}),
});
