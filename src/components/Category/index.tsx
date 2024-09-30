"use client";

import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "@/services/category";

import Image from "next/image";

export const CategoryList = () => {
  const data = useGetCategoryQuery();

  const [categoryId] = useDeleteCategoryMutation();

  const handleDeleteCategory = (e: string) => {
    categoryId(e);
  };

  return (
    <div className=" w-full">
      <h2 className="mb-1 text-2xl">categorys</h2>
      <hr className="border-2 mb-5" />
      {data.data?.map((item, index: number) => (
        <div
          key={index}
          className="border border-1 p-3  rounded-md flex justify-between mb-3"
        >
          <div className="flex items-center gap-x-2">
            <Image
              src={`/${item.icon}.svg`}
              alt="icon"
              width={25}
              height={25}
            />
            <span>{item.name}</span>
          </div>
          <button onClick={() => handleDeleteCategory(item._id)}>
            <Image
              src="/delete.svg"
              alt="delete"
              width={30}
              height={30}
              className="fill-red-500"
            />
          </button>
        </div>
      ))}
    </div>
  );
};
