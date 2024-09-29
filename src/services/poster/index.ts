import { baseApi } from "../basic";

import { AddPoster, GetPoster } from "./type";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPoster: builder.query<GetPoster, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["poster"],
    }),
    addPoster: builder.mutation<void, AddPoster>({
      query: ({ title, content, amount, city }) => ({
        url: "/post/create",
        method: "POST",
        body: {
          title,
          content,
          city,
          amount,
        },
      }),
      invalidatesTags: ["poster"],
    }),

    getMyPoster: builder.query<GetPoster, void>({
      query: () => ({
        url: "/post/my",
        method: "GET",
      }),
      providesTags: ["poster"],
    }),

    deletePoster: builder.mutation<string, string>({
      query: (id) => ({
        url: `/post/delete/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["poster"],  
    }),
  }),

  overrideExisting: false,
});
export const {
  useGetPosterQuery,
  useAddPosterMutation,
  useDeletePosterMutation,
  useGetMyPosterQuery,
} = loginApi;
