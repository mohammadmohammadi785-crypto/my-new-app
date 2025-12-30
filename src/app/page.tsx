import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-gray-500 bg-green-500 p-4">
        This is the Home page
      </h1>
    </div>
  );
}
