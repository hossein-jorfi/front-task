"use client";
import { categpryType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  catrgory: categpryType;
};

const CategoryCard = ({ catrgory }: CategoryCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden text-center bg-gray-200">
      <div>
        <Image
          src={`https://shopapi.liateam.com/${catrgory.image}`}
          alt="category"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Link href={`/products/${catrgory.id}`} className="text-slate-600 hover:text-black">
        <p className="py-3">{catrgory.name}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
