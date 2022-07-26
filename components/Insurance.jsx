import React from "react";
import Image from "next/image";

import { AiOutlineCheck } from "react-icons/ai";

function Insurance() {
  return (
    <div
      className="flex justify-between items-center m-auto my-[80px] px-16 w-[90%] 
       lg:w-full lg:flex-col md:px-0 translate-y-[50px] opacity-0"
      id="insurance"
    >
      <div className="relative max-w-[100%] w-[400px] h-[400px] rounded-sm md:w-full md:h-[350px] sm:h-[300px]">
        <Image
          src="/images/insurance.jpg"
          layout="fill"
          className="z-10 rounded-sm"
        />
        <div className="absolute w-full h-full bg-gray-100 top-0 left-0 rotate-[8deg] rounded-sm overflow-hidden" />
      </div>
      <div className="flex-1 pl-10 lg:mt-5 z-20 lg:px-5">
        <h3 className="font-semibold text-2xl uppercase">
          Dịch vụ bảo hành của chúng tôi
        </h3>
        <div className="color_primary mt-5 flex gap-3">
          <AiOutlineCheck size={16} className="flex-shrink-0" />
          <span className="leading-6 flex-1">
            Khách hàng mua ghế tại Anh Khoa được bảo hành ghế sofa từ 3 – 10 năm
            ( khung và mút ). Bảo trì trọn đời sản phẩm. Sản phẩm bảo trì được
            Anh Khoa hỗ trợ chi phí nhân công sửa chữa, khách hàng chỉ thanh
            toán phí vận chuyển và phần vật tư thay thế.
          </span>
        </div>

        <div className="color_primary mt-5 flex gap-3">
          <AiOutlineCheck size={16} className="flex-shrink-0" />
          <span className="leading-6 flex-1">
            Sản phẩm sẽ được chúng tôi bảo hành miễn phí khi bị lỗi do nhà sản
            xuất. Sản phẩm bảo hành trong điều kiện khách hàng bảo quản và sử
            dụng đúng quy cách, không tác động mạnh hoặc tác động bằng những vật
            nhọn, sắc gây xước bề mặt sản phẩm
          </span>
        </div>

        <div className="color_primary mt-5 flex gap-3">
          <AiOutlineCheck size={16} className="flex-shrink-0" />
          <span className="leading-6 flex-1">
            Các trường hợp không được chúng tôi bảo hành khi sản phẩm bị thay
            đổi kếu cấu ban đầu, sản phẩm quá thời gian bảo hành, Sản phẩm bị
            gãy, lú, trầy xước, hỏng hóc do va đập mạnh hoặc vật nhọn gây ra.
            Sản phẩm bị hao mòn trong quá trình sử dụng của khách hàng theo thời
            gian như phai màu tự nhiên hoặc lão hóa của bề mặt sơn, vải, da,
            simili… Bao gồm cả các trường hợp trầy sước, bong tróc, rách, rạn
            nứt… của các bề mặt này (sơn, vải, da, simili…).
          </span>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
