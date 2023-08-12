import logo from "@/assets/logo.png";
import cartIcon from "@/assets/cart.png";

import Image from "next/image";
import Link from "next/link";

const items = [
  { id: 0, title: " مراقبت پوست", href: "/skin_care" },
  { id: 1, title: " مراقبت مو", href: "/hair_care" },
  { id: 2, title: " مراقبت بدن", href: "/body_care" },
  { id: 3, title: " آرایشی", href: "/cosmetic" },
];

const Header = () => {
  return (
    <div className="bg-white shadow-xl sticky">
      <div className="my-container py-5">
        <Image src={logo} alt="logo" />
        <div className="flex justify-between items-center mt-5">
          <div>
            {items.map((item) => (
              <Link href={item.href} key={item.id} className="ml-10 text-slate-500 hover:text-slate-800">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="relative cursor-pointer">
            <Image src={cartIcon} alt="cart" />
            <p className="absolute -top-2 -right-2 text-white px-1 pt-[3px] bg-red-500 rounded-full w-fit h-fit text-center text-sm">
              10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
