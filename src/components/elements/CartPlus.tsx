"use client";
import cartPlusSvg from "@/assets/cart-plus.svg";
import Image from "next/image";

type CartPlusProps = {
  id: number;
};

const CartPlus = ({ id }: CartPlusProps) => {
  return (
    <div className="bg-[#F7F7F7] rounded-full p-2">
      <Image src={cartPlusSvg} alt="cart" />
    </div>
  );
};

export default CartPlus;
