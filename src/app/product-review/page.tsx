import Products from "@/src/components/Products";
import Review from "@/src/components/Review";
import { Suspense } from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="border-2 border-gray-500 rounded-md p-12">
        <h1>Hi their, Good morning</h1>
        <Suspense
          fallback={
            <div className="animate-spin w-8 h-8 border-dashed p-2 border-white border-6 rounded-full"></div>
          }
        >
          <Products />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-spin p-2 w-8 h-8 border-dashed border-white border-6 rounded-full"></div>
          }
        >
          <Review />
        </Suspense>
      </div>
    </div>
  );
}
