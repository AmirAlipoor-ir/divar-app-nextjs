import Image from "next/image";
import dog from "../../public/car1.jpg";
import car from "../../public/car2.jpg";
export default function Home() {
  const posters = [
    {
      title: "dog",
      price: "123495",
      city: "qazvin",
      imageUrl: car,
    },
    {
      title: "car",
      price: "56",
      city: "qpm",
      imageUrl: dog,
    },
    {
      title: "ben",
      price: "12000",
      city: "gilan",
      imageUrl: dog,
    },
    {
      title: "car",
      price: "23000",
      city: "tehran",
      imageUrl: car,
    },
    {
      title: "mobile",
      price: "1230",
      city: "sanandaj",
      imageUrl: dog,
    },
    {
      title: "glass",
      price: "1235",
      city: "qazvin",
      imageUrl: car,
    },
      
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-9 justify-center ">
        {posters.map((item) => (
          <div className="border-2 rounded-md flex p-3 max-w-72" key={item.title}>
            <Image
            className="rounded-md"
              src={item.imageUrl}
              alt={item.title}
              width={150}
              height={50}
            />
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
