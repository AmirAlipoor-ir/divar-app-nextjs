import { baseApi } from "../basic";

import { AddCategory, GetCategory } from "./types";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<GetCategory, void>({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    addCategory: builder.mutation<AddCategory, AddCategory>({
      query: ({ categoryName, categoryIcon }) => ({
        url: "/category",
        method: "POST",
        body: {
          name: categoryName,
          icon: categoryIcon,
        },
      }),
      invalidatesTags: ["category"],
    }),
  }),

  overrideExisting: false,
});
export const { useGetCategoryQuery, useAddCategoryMutation } = loginApi;
