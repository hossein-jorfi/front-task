import Image from "next/image";
import CartPlus from "./elements/CartPlus";

type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const ProductCard = ({ id, image, title, price }: ProductCardProps) => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden shadow-lg">
      <div>
        <Image
          src={`https://shopapi.liateam.com/${image}`}
          alt="product"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="p-3 flex flex-col justify-between">
        <p className="text-slate-800 text-sm max-h-6">{title}</p>
        <div className="flex justify-between items-center mt-14">
          <p className="text-sm text-[#FF385C]">{price} تومان</p>
          <CartPlus id={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
