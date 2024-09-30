"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import toast from "react-hot-toast";

import { useWhoamiQuery } from "@/services/login";

import { useAddCategoryMutation } from "@/services/category";

import { CategoryList } from "@/components/Category";

import { FormData } from "../type";

export default function AdminPage() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const [createCategory] = useAddCategoryMutation();

  const router = useRouter();

  const { data } = useWhoamiQuery();

  const cookie = Cookies.get("accessTokenCookie");

  if (data?.role === "ADMIN") router.push("/");

  if (!cookie) router.push("/");

  const onSubmit: SubmitHandler<FormData> = async (data: {
    name: string;
    icon: string;
  }) => {
    try {
      await createCategory({
        categoryName: data.name,
        categoryIcon: data.icon,
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

  return (
    <div>
      <h1 className="text-3xl mt-3 font-bold">admin page</h1>
      <hr className="w-44 border-red-500 border-2 mb-5" />
      <div className="flex justify-between">
        <div className="w-full">
          <h2 className="mb-1 text-2xl">New category </h2>
          <hr className="border-2 mb-5 w-[98%]" />

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="text-xl mb-3">category name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="rounded-md border-2 px-3 h-10 w-80 mb-4"
            />
            {/* ......................................... */}
            <label className="text-xl mb-3">icon</label>
            <input
              {...register("icon", { required: true })}
              type="text"
              className="rounded-md border-2 px-3 h-10 w-80 mb-3"
            />
            {/* ------------------------------------------ */}
            <button
              type="submit"
              className="w-80 border-2 mt-3 rounded-lg text-white bg-red-600 py-2 text-xl"
            >
              Add category
            </button>
          </form>
        </div>
        <CategoryList />
      </div>
    </div>
  );
}
