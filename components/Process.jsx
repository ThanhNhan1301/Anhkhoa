import React from "react";
import {
  AiFillCustomerService,
  AiFillCar,
  AiFillTool,
  AiFillCreditCard,
} from "react-icons/ai";
function Process() {
  return (
    <div
      className="w-full mb-[80px] py-16 flex justify-center items-center flex-col 
      bg-slate-200 opacity-0 scale-0"
      id="process"
    >
      <h3 className="px-5 font-bold text-2xl mb-10 uppercase">
        Quy trình sản xuất Sofa
      </h3>
      <div className="w-full flex  justify-center items-center gap-10 flex-wrap md:gap-[4%]">
        <div className="flex flex-col justify-center items-center gap-5 md:w-[48%]">
          <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-400 text-white ">
            <AiFillCustomerService size={26} />
          </div>
          <h3 className="color_primary text-center leading-6 max-w-[300px] px-4">
            Tiếp nhận yêu cầu của quý khách. Tư vấn miễn phí 24/7.
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 md:w-[48%]">
          <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-400 text-white ">
            <AiFillCar size={26} />
          </div>
          <h3 className="color_primary text-center leading-6 max-w-[300px] px-4">
            Tiến hành lên mẫu thiết kế, chuẩn bị nguyên vật liệu.
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 md:w-[48%] md:mt-5">
          <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-400 text-white ">
            <AiFillTool size={26} />
          </div>
          <h3 className="color_primary text-center leading-6 max-w-[300px] px-4">
            Tiến hành sản xuất theo mẫu thiết kế. Thường xuyên báo cáo tiến độ
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 md:w-[48%] md:mt-5">
          <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-400 text-white ">
            <AiFillCreditCard size={26} />
          </div>
          <h3 className="color_primary text-center leading-6 max-w-[300px] px-4">
            Giao hàng, lắp ráp, hướng dẫn sử dụng, bảo quản cho khách hàng.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Process;
