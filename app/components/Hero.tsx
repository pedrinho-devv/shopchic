import { client, urlFor } from "@/lib/sanity";
import React from "react";
import Image from "next/image";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();

  if (!data || !data.image1) {
    return <p className="text-center text-red-500">Imagem não encontrada</p>;
  }

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <Image
        src={urlFor(data.image1).url()}
        alt="Imagem de destaque"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute top-0 left-0"
      />

      <div className="absolute top-1/2 left-12 transform -translate-y-1/2 px-6 py-4">
        <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-4">
          The best <span className="text-[#AFE619]">Games</span><br /> are here!
        </h1>
        <p className="text-xl md:text-2xl text-white font-light mb-6">
          For an unforgettable gaming experience, you’re in the right place.
        </p>
      </div>

      <div className="absolute top-2/3 left-64 transform -translate-x-1/2 px-6 py-4 flex justify-center gap-4">
        <button className="bg-transparent  font-black text-2xl text-[#AFE619] border border-[#AFE619] px-8 py-4 rounded-sm hover:bg-[#AFE619] hover:text-white duration-200 ease-in-out">
          See More
        </button>
        <button className="bg-[#AFE619] font-black text-2xl text-white rounded-2xl px-8 py-4 rounded-sm border border-transparent hover:bg-transparent hover:border-[#AFE619] hover:text-[#AFE619] duration-200 ease-in-out">
          Shop Now
        </button>
      </div>
    </section>
  );
}
