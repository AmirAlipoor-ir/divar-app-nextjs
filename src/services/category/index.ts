import { baseApi } from "../basic";

import { AddCategory } from "./types";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation<AddCategory, AddCategory>({
      query: ({ categoryName, categoryIcon }) => ({
        url: "/category",
        method: "POST",
        body: {
          name: categoryName,
          icon: categoryIcon,
        },
      }),
    }),
  }),

  overrideExisting: false,
});
export const { useAddCategoryMutation } = loginApi;
