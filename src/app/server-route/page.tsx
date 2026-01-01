import { serverSideFunction } from "@/src/utils/server-utils";

export default function page() {
  const massage = serverSideFunction();
  return (
    <div className="text-3xl text-white text-center bg-gray-600">
      <h1>this component sould be on server side -- {massage}</h1>
    </div>
  );
}
