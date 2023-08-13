"use client";
import Image from "next/image";
import cartIcon from "@/assets/cart.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { cartSliceType } from "@/redux/features/cart/cartSlice";
import { productType } from "@/types";
import CartCard from "./CartCard";

const Cart = () => {
  const cart: cartSliceType = useSelector((store: any) => store.cart);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative cursor-pointer">
      <Image
        src={cartIcon}
        alt="cart"
        onClick={() => setIsClicked((prev) => !prev)}
      />
      <p className="absolute -top-2 -right-2 text-white px-1 pt-[3px] bg-red-500 rounded-full w-fit h-fit text-center text-sm">
        {cart.totalCount}
      </p>

      <div
        className={`absolute top-16 w-72 sm:w-96 rounded-lg p-3 left-0 bg-white border ${
          isClicked ? "block" : "hidden"
        }`}
      >
        {cart.products.length === 0 ? (
          <p className="text-slate-600">سبد خرید خالی است!</p>
        ) : (
          <div className="">
            <p className="text-xs text-slate-600">{cart.totalCount} قلم کالا</p>
            {cart.products.map((item: productType) => (
              <CartCard key={item.id} id={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
