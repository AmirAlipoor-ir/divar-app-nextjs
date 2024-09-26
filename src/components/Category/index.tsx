"use client";

import { useGetCategoryQuery } from "@/services/category";

export const CategoryList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = useGetCategoryQuery();

  return (
    <div className=" w-full">
      <h2 className="mb-1 text-2xl">categorys</h2>
      <hr className="border-2 mb-5 " />
      {data.data?.map(
        ({ icon, name }: { icon: string; name: string }, index: number) => (
          <div
            key={index}
            className="border border-1 p-3  rounded-md flex justify-between"
          >
            <div>
              <span>{icon}</span>
              <span>{name}</span>
            </div>
            <span>trash</span>
          </div>
        )
      )}
    </div>
  );
};
