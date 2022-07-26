import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillMail, AiFillPhone } from "react-icons/ai";

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
          <span className=" leading-6">
            Showroom: 12 Nguyễn Hữu Cảnh - Phường 19 - Quận Bình Thạnh - Tp. Hồ
            Chí Minh
          </span>
        </div>
        <div className="flex justify-start items-center gap-3">
          <AiFillPhone size={22} className="color_primary flex-shrink-0" />
          <span className=" leading-6">Điện thoại: 0909.317151</span>
        </div>

        <div className="flex justify-start items-center gap-3">
          <AiFillMail size={22} className="color_primary flex-shrink-0" />
          <span className=" leading-6 underline">
            Email:{" "}
            <Link href="mailto:huynh235@gmail.com">huynh235@gmail.com</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
