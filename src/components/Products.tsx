export default async function Products() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="pb-2">
      <h1 className="text-3xl font-bold text-green-500 bg-gray-500 p-6">
        Product Components
      </h1>
    </div>
  );
}
