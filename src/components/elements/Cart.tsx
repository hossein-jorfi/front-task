"use client";
import Image from "next/image";
import cartIcon from "@/assets/cart.png";
import { useState } from "react";

const Cart = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative cursor-pointer">
      <Image
        src={cartIcon}
        alt="cart"
        onClick={() => setIsClicked((prev) => !prev)}
      />
      <p className="absolute -top-2 -right-2 text-white px-1 pt-[3px] bg-red-500 rounded-full w-fit h-fit text-center text-sm">
        10
      </p>

      <div
        className={`absolute top-16 rounded-lg p-3 left-0 bg-white ${
          isClicked ? "block" : "hidden"
        }`}
      >
        <p className="w-52 text-xs text-slate-600">۲۰ قلم کالا</p>
      </div>
    </div>
  );
};

export default Cart;
