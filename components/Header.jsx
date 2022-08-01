import Image from "next/image";
import Link from "next/link";
import React from "react";
import { brand, logo, phoneNumber } from "../configs/main.json";
import configsHeader from "../configs/header";

function Header() {
  return (
    <div className="w-full" id="header">
      <div
        className="
        flex justify-start items-center gap-3
        text-3xl font-semibold capitalize py-5 text-black lg:px-5 z-20"
      >
        <div className="w-12 h-12 relative rounded-md overflow-hidden">
          <Image src={logo} layout="fill" />
        </div>
        <Link href="/">{brand}</Link>
      </div>
      <div className="flex justify-between items-center md:flex-col-reverse">
        <div
          className="w-1/2 px-5 h-full pr-12 z-20 
          animate-transform_opacity_up mt-6
          md:h-auto md:w-full md:py-5 
        "
        >
          <p className="color_primary uppercase underline">
            {configsHeader.strong}
          </p>
          <div className="py-2">
            {configsHeader.titles.map((item, index) => (
              <h3
                className="uppercase text-2xl tracking-wider font-semibold leading-8"
                key={index}
              >
                {item}
              </h3>
            ))}
          </div>
          <p className="text-gray-500 text-justify mb-6 leading-6">
            {configsHeader.header_description}
          </p>
          <Link href={`tel:${phoneNumber}`}>
            <button className="px-6 h-[36px] bg_primary text-white font-thin rounded-sm shadow-md">
              Gọi cho chúng tôi
            </button>
          </Link>
        </div>
        <div className="relative w-1/2 md:w-[100%] md:mt-5 animate-opacity_scale">
          <div className="relative h-[400px] z-10 rounded-sm overflow-hidden sm:h-[300px]">
            <Image src="/images/header.jpg" alt="header_image" layout="fill" />
          </div>
          <div className="absolute w-full h-full bg-gray-100 top-0 left-0 rotate-[8deg] rounded-sm overflow-hidden" />
        </div>
      </div>
    </div>
  );
}

export default Header;
