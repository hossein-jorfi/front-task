import CategoryCard from "@/components/CategoryCard";
import { categpryType } from "@/types";

async function getData() {
  const res = await fetch(
    "https://shopapi.liateam.com/api/rest/v1/get_categories"
  );
  return res.json();
}

async function Home() {
  const data = await getData();
  return (
    <div className="min-h-screen pt-40 bg-slate-100">
      <div className="my-container">
        <p className="py-10">دسته بندی ها</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {data.length &&
            data.map((item: categpryType) => (
              <CategoryCard key={item.id} catrgory={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
