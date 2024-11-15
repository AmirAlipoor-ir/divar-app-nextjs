"use client";

import Image from "next/image";

import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "@/services/category";

export const CategoryList = () => {
  const { data } = useGetCategoryQuery();

  const [categoryId] = useDeleteCategoryMutation();

  const handleDeleteCategory = (e: string) => {
    categoryId(e);
  };

  return (
    <div className=" w-full">
      <h2 className="mb-1 text-2xl">categorys</h2>
      <hr className="border-2 mb-5" />
      {data?.map(({ name, icon, _id }, index) => (
        <div
          key={index}
          className="border border-1 p-3  rounded-md flex justify-between mb-3"
        >
          <div className="flex items-center gap-x-2">
            <Image src={`/${icon}.svg`} alt="icon" width={25} height={25} />
            <span>{name}</span>
          </div>
          <button onClick={() => handleDeleteCategory(_id)}>
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
