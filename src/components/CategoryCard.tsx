"use client";
import { categpryType } from "@/types";
import Image from "next/image";

type CategoryCardProps = {
  catrgory: categpryType;
};

const CategoryCard = ({ catrgory }: CategoryCardProps) => {
  console.log(catrgory.image);
  return (
    <div>
      <p>{catrgory.name}</p>
      <div>
        <Image src={`https://shopapi.liateam.com/${catrgory.image}`} width={200} height={200} alt="category" />
      </div>
    </div>
  );
};

export default CategoryCard;
