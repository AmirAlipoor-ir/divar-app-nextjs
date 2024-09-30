"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import { useGetCategoryQuery } from "@/services/category";

import { useAddPosterMutation } from "@/services/poster";

import { MyPost } from "@/components/MyPost";

export default function DashboardPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [amount, setAmount] = useState("");

  const [city, setCity] = useState("");

  const [category, setCategory] = useState("");

  const [createPoster] = useAddPosterMutation();

  const { data } = useGetCategoryQuery();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPoster({ title, content, amount, city, category });
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const token = Cookies.get("accessTokenCookie");
  useEffect(() => {
    if (!token) router.push("/login");
  }, [router, token]);

  return (
    <div>
      <div className="flex justify-between">
        <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
          <h1 className="text-3xl mt-3 font-bold">Add Poster</h1>
          <hr className="w-44 border-red-500 border-2 mb-5" />

          <label className="posterLabel">title</label>
          <input
            onChange={handleChangeTitle}
            value={title}
            type="text"
            className="posterInput"
          />

          <label className="posterLabel">information</label>
          <textarea
            onChange={handleChangeContent}
            value={content}
            className="posterInput"
          />

          <label className="posterLabel">price</label>
          <input
            onChange={handleChangeAmount}
            value={amount}
            type="number"
            className="posterInput"
          />

          <label className="posterLabel">city</label>
          <input
            onChange={handleChangeCity}
            value={city}
            type="text"
            className="posterInput"
          />

          <label className="posterLabel">Chategory:</label>
          <select
            value={category}
            className="posterSelect"
            onChange={handleChangeCategory}
          >
            {data?.map(({ name }: { name: string }, index: number) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button
            disabled={!title || !amount}
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
