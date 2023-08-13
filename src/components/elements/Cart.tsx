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
    <div className="relative">
      <Image
        src={cartIcon}
        alt="cart"
        onClick={() => setIsClicked((prev) => !prev)}
      />
      <p className="absolute -top-2 -right-2 text-white px-1 pt-[3px] bg-red-500 rounded-full w-fit h-fit text-center text-sm">
        {cart.totalCount}
      </p>

      <div
        className={`absolute top-16 w-72 sm:w-96 rounded-xl left-0 bg-white border ${
          isClicked ? "block" : "hidden"
        }`}
      >
        {cart.products.length === 0 ? (
          <p className="text-slate-600 p-3">سبد خرید خالی است!</p>
        ) : (
          <>
            <div className="p-3">
              <p className="text-xs text-slate-600">
                {cart.totalCount} قلم کالا
              </p>
              <div className=" divide-y-2">
                {cart.products.map((item: productType) => (
                  <CartCard key={item.id} id={item.id} />
                ))}
              </div>
            </div>
            <div className="bg-gray-200 p-3 rounded-b-xl space-y-6">
              <div className="flex justify-between text-slate-900 font-light">
                <span>جمع کل :</span>
                <span>{cart.totalPrice} تومان</span>
              </div>
              <div className="flex justify-between text-slate-900 font-light">
                <span>مبلغ قابل پرداخت :</span>
                <span>{cart.totalPrice} تومان</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
