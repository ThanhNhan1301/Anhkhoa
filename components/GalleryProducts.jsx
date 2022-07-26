import Image from "next/image";
import React from "react";

function Products() {
  return (
    <div
      className="flex flex-col justify-center items-center mb-[80px]
        translate-y-[50px] opacity-0
      "
      id="gallery"
    >
      <h3 className="text-2xl font-semibold mb-10 uppercase">Bộ sưu tập</h3>
      <div
        className="grid grid-cols-4 grid-rows-4 w-full h-[600px] m-auto gap-3 px-3
        lg:grid-cols-3 lg:grid-rows-3 lg:h-[550px]
        sm:grid-cols-2 sm:grid-rows-2 sm:h-[350px]
      "
      >
        <div
          className="relative col-start-1 col-span-2 row-span-full rounded-md overflow-hidden
          lg:col-span-1 lg:row-start-3
          sm:col-start-1 sm:col-span-1 sm:row-start-1 sm:row-span-1 
        "
        >
          <Image src="/images/products/1.jpg" layout="fill" />
        </div>
        <div
          className="relative col-start-3 col-span-2 row-start-1 row-span-2 rounded-md overflow-hidden
          lg:col-span-full lg:col-start-1 lg:row-start-1
          sm:col-start-2 sm:col-span-1 sm:row-start-1 sm:row-span-1 
        "
        >
          <Image src="/images/products/2.jpg" layout="fill" />
        </div>

        <div
          className="relative col-start-3 col-span-1 row-start-3 row-span-2 rounded-md overflow-hidden
          lg:col-start-2 lg:row-start-3 lg:row-span-1
          sm:col-start-1 sm:col-span-1 sm:row-start-2 sm:row-span-1 
        "
        >
          <Image src="/images/products/3.jpg" layout="fill" />
        </div>

        <div
          className="relative col-start-4 col-span-1 row-start-3 row-span-2 rounded-md overflow-hidden
          lg:col-start-3 lg:row-start-3 lg:row-span-1 
          sm:col-start-2 sm:col-span-1 sm:row-start-2 sm:row-span-1 
        "
        >
          <Image src="/images/products/4.jpg" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default Products;
