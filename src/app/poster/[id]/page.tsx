"use client";

import { useGetPosterQuery } from "@/services/poster";
import { useRouter } from "next/navigation";

export default function ReviewDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const { data } = useGetPosterQuery();

  const posterId = params.id;

  const posterDetail = data?.posts.find(
    ({ _id }: { _id: string }) => _id === posterId
  );

  const handleGoBack = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="border-2 mt-4 rounded-lg text-3xl flex justify-between p-4">
        <span>title: {posterDetail?.options.title}</span>
        <span>price: {posterDetail?.amount}</span>
        {/* <span>price: {posterDetail.options.title}</span> */}
        <span>city: {posterDetail?.options.city}</span>
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
