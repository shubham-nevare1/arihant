import React from "react";
import { fetchProducts } from "../../lib/api";
import HomePage from "@/components/HomePage";

export default async function Home() {
  // const api = await fetchProducts();

  const api = await fetchProducts("home-page");

  console.log("hii", api);

  return (
    <>
      <div className="">
        {api && <HomePage data={api} />}
      </div>
    </>
  );
}
