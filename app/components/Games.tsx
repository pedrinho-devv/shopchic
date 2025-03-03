import { client } from "@/lib/sanity";
import { simplitiedProduct } from "../interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = `*[_type =='product'][0...4] | order(_createAt desc){
    _id,
    price,
    name,
    'slug': slug.current,
    'categoryName': category->name,
    'images': images[0].asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Games() {
  const data: simplitiedProduct[] = await getData();

  return (
    <div className="bg-[#0F041C]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl text-white font-bold tracking-tight">
            Games
          </h2>

          <Link
            href={"/all"}
            className="text-2xl text-white flex items-center justify-center gap-x-1 "
          >
            See All{" "}
            <span>
              <ArrowRight className="text-white" />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-300 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.images} // Alterado aqui para acessar a imagem corretamente
                  alt="produtos"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-2xl justify-between text-gray-500">
                        <Link href={`/product/${product.slug}`}>
                        {product.name}
                        </Link>
                    </h3>
                    <p className="text-gray-300 mt-1">{product.categoryName}</p>
                </div>
                <p className="text-2xl text-white">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
