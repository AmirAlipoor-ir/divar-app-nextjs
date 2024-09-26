"use client";

import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "@/services/category";

export const CategoryList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = useGetCategoryQuery();

  const [categoryId] = useDeleteCategoryMutation();

  const handleDeleteCategory = (e: string) => {
    categoryId(e);
  };

  return (
    <div className=" w-full">
      <h2 className="mb-1 text-2xl">categorys</h2>
      <hr className="border-2 mb-5" />
      {data.data?.map(
        (
          { icon, name, _id }: { icon: string; name: string; _id: string },
          index: number
        ) => (
          <div
            key={index}
            className="border border-1 p-3  rounded-md flex justify-between"
          >
            <div>
              <span>{icon}</span>
              <span>{name}</span>
            </div>
            <button onClick={() => handleDeleteCategory(_id)}>trash</button>
          </div>
        )
      )}
    </div>
  );
};
