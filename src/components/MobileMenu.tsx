"use client";
import menuSVG from "@/assets/menu.svg";
import { categpryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ items }: { items: categpryType[] }) => {
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <div className="sm:hidden relative">
      <Image
        src={menuSVG}
        alt="menu"
        onClick={() => setIsClicked((prev) => !prev)}
      />
      <div
        className={`${
          isClicked ? "block" : "hidden"
        } absolute top-20 rounded p-3 w-52 bg-white flex flex-col space-y-5`}
      >
        {items.map((item) => (
          <Link
            href={`/products/${item.id}`}
            key={item.id}
            className="ml-4 text-slate-500 hover:text-slate-800"
          >
            {`${item.name} `}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
