import { baseApi } from "../basic";

import { AddPoster, GetPoster } from "./type";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<GetPoster, void>({
      query: () => ({
        url: "/post/my",
        method: "GET",
      }),
    }),
    addCategory: builder.mutation<AddPoster, AddPoster>({
      query: ({ categoryName, categoryIcon }) => ({
        url: "/post/create",
        method: "POST",
        body: {
          name: categoryName,
          icon: categoryIcon,
        },
      }),
    }),
    deleteCategory: builder.mutation<string, string>({
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
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = loginApi;
