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
        className="absolute top-0 left-0"
      />

<div className="absolute top-1/2 left-12 transform -translate-y-1/2 px-6 py-4">
  <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-4">
    The best games are here!
  </h1>
  <p className="text-xl md:text-2xl text-white font-medium">
    For an unforgettable gaming experience, you’re in the right place.
  </p>
</div>



    </section>
  );
}
