"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { useWhoamiQuery } from "@/services/login";
import { useAddCategoryMutation } from "@/services/category";
import { CategoryList } from "@/components/Category";

export default function AdminPage() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");

  const [createCategory] = useAddCategoryMutation();

  const router = useRouter();

  const { data } = useWhoamiQuery();

  if (data?.role === "ADMIN") router.push("/");

  const handleChangeCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleChangeCategoryIcon = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryIcon(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createCategory({ categoryName, categoryIcon }).unwrap();
    setCategoryName("");
    setCategoryIcon("");
  };

  return (
    <div>
      <h1 className="text-3xl mt-3 font-bold">admin page</h1>
      <hr className="w-44 border-red-500 border-2 mb-5" />
      <div className="flex justify-between">
        <div className="w-full">
          <h2 className="mb-1 text-2xl">New category </h2>
          <hr className="border-2 mb-5 w-[98%]" />

          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="text-xl mb-3">category name</label>
            <input
              type="text"
              className="rounded-md border-2 px-3 h-10 w-80 mb-4"
              value={categoryName}
              onChange={handleChangeCategoryName}
            />
            {/* ......................................... */}
            <label className="text-xl mb-3">icon</label>
            <input
              type="text"
              className="rounded-md border-2 px-3 h-10 w-80 mb-3"
              value={categoryIcon}
              onChange={handleChangeCategoryIcon}
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
        {/* ........................................................ */}
        <CategoryList />
      </div>
    </div>
  );
}
