import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Cart from "./elements/Cart";

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
                href={`/products/${item.id}`}
                key={item.id}
                className="ml-4 text-sm text-slate-500 hover:text-slate-800"
              >
                {`${item.name} `}
              </Link>
            ))}
          </div>
          <MobileMenu items={items} />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
