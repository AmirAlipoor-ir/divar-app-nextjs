"use client";

import { useGetPosterQuery } from "@/services/poster";

const ReviewDetailPage = ({ params }: any) => {
  const { data } = useGetPosterQuery();
  const posterId = params.poster;
  // console.log(posterId);
  // console.log(data?.posts.);

  const posterDetail = data?.posts.find(
    ({ _id }: { _id: string }) => _id === posterId
  );
  console.log(posterDetail);
  return (
    <>
      <div className="border-2 mt-4 rounded-lg text-3xl flex justify-between p-4">
        <span>title: {posterDetail.options.title}</span>
        <span>price: {posterDetail.amount}</span>
        {/* <span>price: {posterDetail.options.title}</span> */}
        <span>city: {posterDetail.options.city}</span>
      </div>
    </>
  );
};

export default ReviewDetailPage;
