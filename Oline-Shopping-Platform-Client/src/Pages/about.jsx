import React from "react";
import delivery from "../assets/about/delivery.svg";
import secure from "../assets/about/secure.svg";
import service from "../assets/about/service.svg";
import Title from "../component/title"
const about = () => {
  return (
    <>
      <div className=" w-full relative bg-gray-200 my-10 py-32 flex flex-col md:flex-row justify-evenly items-center gap-14">
      <div className="absolute  top-5 left-5 text-3xl flex gap-2 font-extrabold text-[#DB4444]">
        <div className="w-9 h-16  rounded-2xl bg-[#DB4444]"></div>
        why Choose Us
      </div>
        <div className=" flex flex-col space-y-5 justify-center items-center  p-5">
          <div className="w-24 h-24 rounded-full bg-[#2C3E50] flex flex-col justify-center  items-center ">
            <img src={delivery} alt="" />
          </div>
          <div className="text-center">
            <h className="text-[#2C3E50]   text-2xl font-extrabold">
              FREE AND FAST DELIVERY
            </h>
            <p className="text-xl pt-3 text-[#2C3E50] font-medium">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className=" flex flex-col space-y-5 justify-center items-center  p-5">
          <div className="w-24 h-24 rounded-full bg-[#2C3E50] flex flex-col justify-center  items-center ">
            <img src={delivery} alt="" />
          </div>
          <div className="text-center">
            <h className="text-[#2C3E50]   text-2xl font-extrabold">
            24/7 CUSTOMER SERVICE
            </h>
            <p className="text-xl pt-3 text-[#2C3E50] font-medium">
            Friendly 24/7 customer support
            </p>
          </div>
        </div>
        <div className=" flex flex-col space-y-5 justify-center items-center  p-5">
          <div className="w-24 h-24 rounded-full bg-[#2C3E50] flex flex-col justify-center  items-center ">
            <img src={delivery} alt="" />
          </div>
          <div className="text-center">
            <h className="text-[#2C3E50]   text-2xl font-extrabold">
            MONEY BACK GUARANTEE
            </h>
            <p className="text-xl pt-3 text-[#2C3E50] font-medium">
            We reurn money within 30 days
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default about;
