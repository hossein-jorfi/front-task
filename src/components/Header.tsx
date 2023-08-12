import logo from "@/assets/logo.png";
import cartIcon from "@/assets/cart.png";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

async function getData() {
  const res = await fetch(
    "https://shopapi.liateam.com/api/rest/v1/get_categories"
  );
  return res.json();
}

const Header = async () => {
  const items = await getData();
  return (
    <div className="bg-white shadow-lg sticky">
      <div className="my-container py-5">
        <Image src={logo} alt="logo" className="hidden sm:block" />
        <div className="flex justify-between items-center mt-5">
          <div className="hidden sm:block">
            {items.map((item: any) => (
              <Link
                href={`/product/${item.id}`}
                key={item.id}
                className="ml-4 text-sm text-slate-500 hover:text-slate-800"
              >
                {`${item.name} `}
              </Link>
            ))}
          </div>
          <MobileMenu items={items} />
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
