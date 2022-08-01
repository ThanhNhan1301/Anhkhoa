import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillMail, AiFillPhone } from "react-icons/ai";
import { address, phoneNumber, email } from "../configs/main.json";

function Footer() {
  return (
    <div
      className="w-full bg-slate-220
        flex flex-col justify-center items-center 
        bg-gray-200
      "
    >
      <div className="max-w-[800px] w-full px-6 py-10  flex flex-col justify-center items-start gap-4">
        <div className="flex justify-start items-center gap-3">
          <AiFillHome size={22} className="color_primary flex-shrink-0" />
          <span className=" leading-6">Showroom: {address}</span>
        </div>
        <div className="flex justify-start items-center gap-3">
          <AiFillPhone size={22} className="color_primary flex-shrink-0" />
          <Link href={`tel:${phoneNumber}`}>
            <span className=" leading-6 cursor-pointer">
              Điện thoại: {phoneNumber}
            </span>
          </Link>
        </div>

        <div className="flex justify-start items-center gap-3">
          <AiFillMail size={22} className="color_primary flex-shrink-0" />
          <span className=" leading-6 underline">
            Email: <Link href={`mailto:${email}`}>{email}</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
