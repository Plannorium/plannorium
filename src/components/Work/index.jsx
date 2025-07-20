import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <section className="min-h-screen w-full h-full">
      <h2 className="work-heading">work</h2>

      <div className="grid-container">
        <div className="large margin-large w-full h-full lg:w-[914px] lg:h-[418] bg-[#E9DED9]">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              className="grid-item"
              src="/images/work-1.png"
              width={837}
              height={0}
              alt="image"
            />
          </div>
        </div>

        <div className="top-right">
          <div className="margin-top w-full h-full lg:w-[448px] lg:h-[200px] bg-[#E9DED9]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                className="grid-item"
                src="/images/work-2.png"
                width={402}
                height={0}
                alt="image"
              />
            </div>
          </div>

          <div className="w-full h-full lg:w-[448px] lg:h-[200px] bg-[#E9DED9]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                className="grid-item"
                src="/images/work-3.png"
                width={402}
                height={0}
                alt="image"
              />
            </div>
          </div>
        </div>

        <div className="bottom-row">
          <div className="margin-small w-full h-full lg:w-[448px] lg:h-[200px] bg-[#E9DED9]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                className="grid-item"
                src="/images/work-6.png"
                width={402}
                height={0}
                alt="image"
              />
            </div>
          </div>

          <div className="margin-left w-full h-full lg:w-[448px] lg:h-[200px] bg-[#E9DED9]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                className="grid-item"
                src="/images/work-5.png"
                width={402}
                height={0}
                alt="image"
              />
            </div>
          </div>

          <div className="margin-left-bottom w-full h-full lg:w-[448px] lg:h-[200px] bg-[#E9DED9]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                className="grid-item"
                src="/images/work-4.png"
                width={402}
                height={0}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

// @media (max-width: 768px) {
//   .grid-container {
//     grid-template-columns: 1fr;
//     grid-template-rows: auto auto auto;
//   }
//   .grid-item.large,
//   .grid-item.top-right,
//   .grid-item.bottom-row {
//     grid-column: 1 / 2;
//   }
//   .grid-item.bottom-row {
//     grid-template-columns: 1fr;
//   }
// }
