export default async function Review() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="pb-2">
      <h1 className="text-3xl rounded-md font-bold bg-green-500 text-gray-500 p-6">
        Review Components
      </h1>
    </div>
  );
}
