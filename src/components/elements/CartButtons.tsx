"use client";
import Image from "next/image";
import plusSVG from "@/assets/plus.svg";
import minusSVG from "@/assets/minus.svg";
import trash from "@/assets/trash-2.svg";
import { useDispatch } from "react-redux";
import { productType } from "@/types";
import { addProduct, removeProduct } from "@/redux/features/cart/cartSlice";

const CartButtons = ({
  count,
  product,
}: {
  count: number;
  product: productType;
}) => {
  const dispath = useDispatch();

  return (
    <div className="flex items-center mt-2">
      <div className="bg-gray-100 rounded p-2 flex items-center justify-between w-28">
        <span
          className="cursor-pointer"
          onClick={() => dispath(addProduct(product))}
        >
          <Image src={plusSVG} alt="plus" />
        </span>
        <span>{count}</span>
        <span
          className="cursor-pointer"
          onClick={() => dispath(removeProduct(product))}
        >
          <Image src={minusSVG} alt="plus" />
        </span>
      </div>
      <div className="mr-3">
        <Image src={trash} alt="trash" />
      </div>
    </div>
  );
};

export default CartButtons;
