import ProductCard from "@/components/ProductCard";

async function getData(id: number) {
  const res = await fetch(
    `https://shopapi.liateam.com/api/rest/v1/get_product?categories=${id}`
  );
  return res.json();
}

const Page = async ({ params }: any) => {
  const data = await getData(params.categoryId);

  return (
    <div className="bg-slate-100 pt-40">
      <div className="my-container min-h-screen">
        <p className="py-10">مراقبت پوست</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {data.list.map((item: any) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.small_pic}
              price={item.price.final_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
