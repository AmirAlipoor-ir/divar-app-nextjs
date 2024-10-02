"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import { SubmitHandler, useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { useGetCategoryQuery } from "@/services/category";
import { useAddPosterMutation } from "@/services/poster";

import { MyPost } from "@/components/MyPost";
import { Input } from "@/components/Input";

import { PosterRes } from "../type";

export default function DashboardPage() {
  const { register, handleSubmit, reset } = useForm<PosterRes>();

  const [createPoster] = useAddPosterMutation();

  const { data } = useGetCategoryQuery();

  const { push } = useRouter();

  const onSubmit: SubmitHandler<PosterRes> = async ({
    title,
    content,
    amount,
    city,
    category,
  }) => {
    try {
      await createPoster({
        title,
        content,
        amount,
        city,
        category,
      });
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const token = Cookies.get("accessToken");
  useEffect(() => {
    if (!token) push("/login");
  }, [push, token]);

  return (
    <div>
      <div className="flex justify-between">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
          <h1 className="text-3xl mt-3 font-bold">Add Poster</h1>
          <hr className="w-44 border-red-500 border-2 mb-5" />

          <label className="text-xl mb-2">title</label>
          <Input register={register} type="text" name="title" />

          <label className="text-xl mb-2">information</label>
          <textarea
            {...register("content", { required: true })}
            className="border rounded-md block mb-6 py-2 shadow-md focus:border-red-300 outline-none w-full pl-5 focus:border-2"
          />

          <label className="text-xl mb-2">price</label>
          <Input register={register} type="number" name="amount" />

          <label className="text-xl mb-2">city</label>
          <Input name="city" type="text" register={register} />

          <label className="text-xl mb-2">Chategory:</label>
          <select
            className="bg-gray-50 border rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 shadow-md"
            {...register("category")}
          >
            {data?.map(({ name }, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="border-2 w-full mt-10 rounded-lg py-3 text-white bg-red-500 text-2xl disabled:bg-slate-500"
          >
            Add poster
          </button>
        </form>
        <div className="w-1/2">
          <MyPost />
        </div>
      </div>
    </div>
  );
}
