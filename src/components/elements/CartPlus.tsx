"use client";
import cartPlusSvg from "@/assets/cart-plus.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/redux/features/cart/cartSlice";

type CartPlusProps = {
  id: number;
  image: string;
  price: number;
  title: string;
};

const CartPlus = ({ id, title, image, price }: CartPlusProps) => {
  const myPayload = {
    id,
    title,
    image,
    price,
  };

  const dispath = useDispatch();
  const cart = useSelector((store: any) => store.cart);

  const addHandler = () => {
    dispath(addProduct(myPayload));
  };

  return (
    <div className="bg-[#F7F7F7] rounded-full p-2 cursor-pointer" onClick={addHandler}>
      <Image src={cartPlusSvg} alt="cart" />
    </div>
  );
};

export default CartPlus;
