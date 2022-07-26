import React from "react";
import {
  AiFillCar,
  AiFillGift,
  AiFillFire,
  AiFillCustomerService,
} from "react-icons/ai";

function BestChoose() {
  return (
    <div
      className="mt-[80px] px-16 lg:px-5 translate-y-[50px] opacity-0"
      id="best_choose"
    >
      <h6 className="mb-2 color_primary text-xl">Sự lựa chọn là của bạn</h6>
      <h3 className="mb-8 font-semibold text-2xl uppercase">
        Tại sao chọn chúng tôi
      </h3>
      <div className="grid grid-flow-row grid-rows-2 grid-cols-2 md:rid-rows-4 md:grid-cols-1">
        <div className="col-span-1 p-5 flex justify-between gap-5 md:px-0 rounded-sm transition-all hover:bg-slate-200">
          <div className="w-[50px] h-[50px] bg-gray-200 flex justify-center items-center rounded-sm color_primary">
            <AiFillFire size={26} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Chúng tôi có kinh nghiệm</h3>
            <p className="text-[15px] leading-5 pl-2 color_primary">
              Chúng tôi là đơn vị chuyên nghiệp có hơn 10 năm kinh nghiệm trong
              lĩnh vực tư vấn, thiết kế, sửa chữa nội thất Sofa gia đình, những
              dự án trang trí nội ngoại thất từ nhà ở, nhà hàng, khách sạn, quán
              café, chung cư… với đội ngũ nhân viên tay nghề cao.
            </p>
          </div>
        </div>

        <div className="col-span-1 p-5 flex justify-between gap-5 md:px-0 rounded-sm transition-all hover:bg-slate-200">
          <div className="w-[50px] h-[50px] bg-gray-200 flex justify-center items-center rounded-sm color_primary">
            <AiFillCustomerService size={26} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">
              Đội ngũ nhân viên chuyên nghiệp
            </h3>
            <p className="text-[15px] leading-5 pl-2 color_primary">
              Với đội ngũ nhân viên trẻ đầy lòng nhiệt huyết và yêu nghề chúng
              tôi sẽ mang đến những mẫu Sofa thiết kế đẹp với công năng sử dụng
              tốt nhất!. Luôn đáp ứng tiến độ được giao. Đội ngũ tư vấn, hỗ trợ
              24/7/365 ngày để đáp ứng những yêu cầu của quý khách hàng.
            </p>
          </div>
        </div>

        <div className="col-span-1 p-5 flex justify-between gap-5 md:px-0 rounded-sm transition-all hover:bg-slate-200">
          <div className="w-[50px] h-[50px] bg-gray-200 flex justify-center items-center rounded-sm color_primary">
            <AiFillGift size={26} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">
              Mang lại nhiều lợi ích cho khách hàng
            </h3>
            <p className="text-[15px] leading-5 pl-2 color_primary">
              Ngoài việc thiết kế, cung cấp nguyên vật liệu chất lượng, giá
              thành hợp lý. Chúng tôi còn tư vấn cho Quý khách hàng lựa chọn sản
              phẩm như thế nào cho phù hợp dựa trên mức chi phí hiện có của Quý
              khách hàng.
            </p>
          </div>
        </div>

        <div className="col-span-1 p-5 flex justify-between gap-5 md:px-0 rounded-sm transition-all hover:bg-slate-200">
          <div className="w-[50px] h-[50px] bg-gray-200 flex justify-center items-center rounded-sm color_primary">
            <AiFillCar size={26} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Luôn luôn hoàn thành tiến độ</h3>
            <p className="text-[15px] leading-5 pl-2 color_primary">
              Chúng tôi luôn luôn biết thời gian của quý khách là vô giá. Việc
              đảm bảo tiến độ và chất lượng của những sản phẩm luôn là ưu tiên
              hàng đầu của chúng tôi. Miễn phí giao hàng, lắp ráp trong nội
              thành. Đảm bảo quý khách luôn có trải nghiệm và hài lòng khi lựa
              chọn chúng tôi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestChoose;
