import { getStore } from "@/libs/api-libs";
import Image from "next/image";
import CardProduct from "../components/CardProduct";

export default async function Page() {

  const products = await getStore("products")

  return (
    <>
      <div className="">
        <div className="">
          <CardProduct api={products} />
        </div>
      </div>
    </>
  );
}
