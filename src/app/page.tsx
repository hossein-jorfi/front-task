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
    <div className="min-h-screen bg-slate-100">
      {data.length &&
        data.map((item: categpryType) => (
          <CategoryCard key={item.id} catrgory={item} />
        ))}
      <div className="my-container">دسته بندی ها</div>
    </div>
  );
}

export default Home;
