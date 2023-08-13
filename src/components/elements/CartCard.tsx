"use client";

import { cartSliceType } from "@/redux/features/cart/cartSlice";
import { productType } from "@/types";
import { useSelector } from "react-redux";
import Image from "next/image";
import closeSVG from "@/assets/Close.svg";
import CartButtons from "./CartButtons";

type CartCardProps = {
  id: number;
};

const CartCard = ({ id }: CartCardProps) => {
  const cart: cartSliceType = useSelector((store: any) => store.cart);
  const productInCart = cart.products.find(
    (item: productType) => item.id === id
  );

  return (
    <div className="flex py-5">
      <div>
        <Image
          src={`https://shopapi.liateam.com/${productInCart?.image}`}
          alt="product"
          width={90}
          height={90}
          sizes="100vw"
          // style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex justify-between w-full">
        <div>
          <p className="text-slate-700 font-light">{productInCart?.title}</p>
          <CartButtons
            count={productInCart?.count as number}
            product={productInCart as productType}
          />
          <p className="text-sm mt-2 text-[#FF385C]">{productInCart?.price} تومان</p>
        </div>
        <div>
          <Image src={closeSVG} alt="close" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
