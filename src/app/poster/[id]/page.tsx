"use client";

import { paramsId } from "@/app/type";
import { useGetDetailPosterQuery } from "@/services/poster";
import { useRouter } from "next/navigation";

export default function ReviewDetailPage({ params }: { params: paramsId }) {
  const { push } = useRouter();

  const posterId = params.id;

  const { data: detailPosterData } = useGetDetailPosterQuery(posterId);

  const handleGoBack = () => {
    push("/");
  };
  return (
    <div>
      <div className="border-2 mt-4 rounded-lg text-3xl flex justify-between p-4">
        <span>title: {detailPosterData?.post.options.title}</span>
        <span>price: {detailPosterData?.post.amount}</span>
        <span>city: {detailPosterData?.post.options.city}</span>
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
