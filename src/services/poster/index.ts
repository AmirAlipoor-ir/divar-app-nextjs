import { baseApi } from "../basic";

import { AddPoster, GetPoster } from "./type";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPoster: builder.query<GetPoster, void>({
      query: () => ({
        url: "/post/my",
        method: "GET",
      }),
    }),
    addPoster: builder.mutation<AddPoster, AddPoster>({
      query: ({ categoryName, categoryIcon }) => ({
        url: "/post/create",
        method: "POST",
        body: {
          name: categoryName,
          icon: categoryIcon,
        },
      }),
    }),
    deletePoster: builder.mutation<string, string>({
      query: (id) => ({
        url: `/post/delete/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),

  overrideExisting: false,
});
export const {
  useGetPosterQuery,
  useAddPosterMutation,
  useDeletePosterMutation,
} = loginApi;
