"use client";

import Image from "next/image";

import Link from "next/link";

import { useGetCategoryQuery } from "@/services/category";
import { useGetPosterQuery } from "@/services/poster";

export default function Home() {
  const { data, isLoading } = useGetPosterQuery();

  const category = useGetCategoryQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-2xl">
        Loading........... Please do not leave the page
      </div>
    );
  }

  return (
    <div className="mt-10 flex justify-between gap-x-3">
      <section className="w-1/5">
        <h1 className="font-black text-2xl mb-5">Categories List</h1>
        <div>
          {category.data?.map(({ name, icon }, index) => (
            <div
              className="flex mb-3 gap-x-2 border-2 rounded-lg p-1"
              key={index}
            >
              <Image src={`/${icon}.svg`} alt="icon" width={25} height={25} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="flex flex-wrap gap-9 justify-center w-4/5 ">
        {data?.posts.map((item, index) => (
          <Link key={index} href={`/poster/${item._id}`}>
            <div className="border-2 rounded-md flex p-3 w-36 overflow-hidden">
              <div className="flex flex-col justify-between">
                <span className="text-3xl block">{item.options.title}</span>
                <span className="text-sm block">price:{item.amount}</span>
                <span className="text-sm block text-ellipsis whitespace-nowrap overflow-hidden">
                  content:{item.options.content}
                </span>
                <span>{item.city}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
