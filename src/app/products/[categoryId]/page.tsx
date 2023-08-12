async function getData(id: number) {
  const res = await fetch(
    `https://shopapi.liateam.com/api/rest/v1/get_product?categories=${id}`
  );
  return res.json();
}

const Page = async ({ params }: any) => {
  const data = await getData(params.categoryId);
  console.log(data);
  return (
    <div className="container">
      {
        data.list.map((item: any) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
};

export default Page;
