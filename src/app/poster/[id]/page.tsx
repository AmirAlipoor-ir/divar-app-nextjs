"use client";

import { useGetDetailPosterQuery } from "@/services/poster";
import { useRouter } from "next/navigation";

export default function ReviewDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { push } = useRouter();

  const posterId = params.id;

  const { data } = useGetDetailPosterQuery(posterId);

  const handleGoBack = () => {
    push("/");
  };
  return (
    <div>
      <div className="border-2 mt-4 rounded-lg text-3xl flex justify-between p-4">
        <span>title: {data?.post.options.title}</span>
        <span>price: {data?.post.amount}</span>
        <span>city: {data?.post.options.city}</span>
      </div>
      <div
        onClick={handleGoBack}
        className="text-xl mt-10 p-4 w-52 rounded-xl bg-red-50 border-2 cursor-pointer"
      >
        back to the posters
      </div>
    </div>
  );
}
