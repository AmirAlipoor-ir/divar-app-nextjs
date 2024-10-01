import { baseApi } from "../basic";

import { AddPoster, PostDetailPayload, PostListPayload } from "./type";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPoster: builder.query<PostListPayload, void>({
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

    getMyPoster: builder.query<PostListPayload, void>({
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
      }),
      invalidatesTags: ["poster"],
    }),
    getDetailPoster: builder.query<PostDetailPayload, string>({
      query: (id) => ({
        url: `/post/${id}`,
        method: "GET",
      }),
    }),
  }),

  overrideExisting: false,
});
export const {
  useGetPosterQuery,
  useAddPosterMutation,
  useDeletePosterMutation,
  useGetMyPosterQuery,
  useGetDetailPosterQuery,
} = loginApi;
