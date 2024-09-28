"use client";

import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "@/services/category";

import Image from "next/image";

import trash from "../../../public/delete.svg";

export const CategoryList = () => {
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
            className="border border-1 p-3  rounded-md flex justify-between mb-3"
          >
            <div className="flex items-center gap-x-2">
              <img src={`/${icon}.svg`} alt="icon" /> <span>{name}</span>
            </div>
            <button onClick={() => handleDeleteCategory(_id)}>
              <Image
                src={trash}
                alt="trash"
                width={30}
                className="fill-red-500"
              />
            </button>
          </div>
        )
      )}
    </div>
  );
};
