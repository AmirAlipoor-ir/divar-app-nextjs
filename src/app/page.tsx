"use client";
import { useGetCategoryQuery } from "@/services/category";

export default function Home() {
  const posters = [
    {
      title: "dog",
      price: "123495",
      city: "qazvin",
    },
    {
      title: "car",
      price: "56",
      city: "qazvin",
    },
    {
      title: "ben",
      price: "12000",
      city: "gilan",
    },
    {
      title: "car",
      price: "56",
      city: "qazvin",
    },
    {
      title: "car",
      price: "23000",
      city: "tehran",
    },
    {
      title: "mobile",
      price: "1230",
      city: "sanandaj",
    },
    {
      title: "glass",
      price: "1235",
      city: "qazvin",
    },
    {
      title: "car",
      price: "56",
      city: "qazvin",
    }, {
      title: "car",
      price: "56",
      city: "qazvin",
    },
  ];

  const data: any = useGetCategoryQuery();

  return (
    <div className="mt-10 flex justify-between gap-x-3">
      <section className="w-1/5">
        <h1 className="font-black text-2xl mb-5">Categories List</h1>
        <div>
          {data.data?.map(
            ({ name, icon }: { name: string; icon: string }, index: number) => (
              <div className="flex mb-3 gap-x-2 border-2 rounded-lg p-1" key={index}>
                <img src={`/${icon}.svg`} alt="icon" />
                <span>{name}</span>
              </div>
            )
          )}
        </div>
      </section>
      <div className="flex flex-wrap gap-9 justify-center w-4/5 ">
        {posters.map((item,index) => (
          <div
            className="border-2 rounded-md flex p-3 max-w-72"
            key={index}
          >
            {/* <Image
              className="rounded-md"
              src={item.title}
              alt={item.title}
              width={150}
              height={50}
            /> */}
            <div className="flex flex-col justify-between">
              <span className="text-3xl block">{item.title}</span>
              <span className="text-sm block">price:{item.price}</span>
              <span>{item.city}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
