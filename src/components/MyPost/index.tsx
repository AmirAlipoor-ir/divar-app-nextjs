"use client";

import {
  useDeletePosterMutation,
  useGetMyPosterQuery,
} from "@/services/poster";
import Image from "next/image";
import trash from "../../../public/delete.svg";

export const MyPost = () => {
  const { data } = useGetMyPosterQuery();
  console.log(data);

  const [deletePoster] = useDeletePosterMutation();

  const handleDelete = (id : string) => {
    deletePoster(id);
  };
  return (
    <div className="pl-4">
      <h1 className="text-3xl mt-3 font-bold">My Poster</h1>
      <hr className="w-44 border-red-500 border-2 mb-5" />
      <div className="flex flex-wrap justify-between ">
        {data?.posts.map((item, index) => (
          <div
            className="border-2 flex justify-between rounded-md p-3 mb-2 w-6/12"
            key={index}
          >
            <span>title: {item.options.title}</span>
            <span>price: {item.amount}</span>
            <Image
              className="cursor-pointer"
              onClick={() => handleDelete(item._id)}
              src={trash}
              width={20}
              height={20}
              alt="trash"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
