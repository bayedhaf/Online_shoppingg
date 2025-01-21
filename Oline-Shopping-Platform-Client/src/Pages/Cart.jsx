import Footer from "../component/footer";
import NavBar from "../component/NavBar";
import { useState } from "react";

const Cart = () => {
  const [amount, setAmount] = useState(1);
  const handlClickMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handlClickPlus = () => {
    setAmount(amount + 1);
  };
  return (
    <section className=" w-full   h-fit  flex flex-col justify-center items-center">
      <div className="w-full h-fit  ">
        <NavBar />
      </div>
      <section className="w-full h-fit max-w-7xl flex flex-col ">
        <div className="w-full h-fit flex  gap-8 justify-start items-center border-b pb-10   mt-8">
          <div className="w-[40%] h-fit flex flex-col gap-4 justify-center items-start mt-8">
            <h1>Items</h1>
          </div>
          <div className="w-[20%] h-fit flex flex-col gap-4 justify-center items-start mt-8">
            <h1>Price</h1>
          </div>
          <div className="w-[20%] h-fit flex flex-col gap-4 justify-center items-center mt-8">
            <h1>Quantity</h1>
          </div>
          <div className="w-[20%] h-fit flex flex-col gap-4 justify-center items-end pr-4 mt-8">
            <h1>Total</h1>
          </div>
        </div>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-full h-fit flex  gap-8 justify-start items-center border-b pb-10   mt-8"
          >
            <div className="w-[40%] h-fit flex flex-col gap-4 justify-center items-start mt-8">
              <div className="w-full h-24 flex items-center gap-4">
                <div className="w-24 h-24 bg-[#F5F5F5] rounded-md"></div>
                <div className="w-[70%] h-24 flex flex-col gap-2 justify-center items-start">
                  <h1 className="text-xl font-semibold">Havic HV G-92 Gamepad</h1>
                  <p className="text-[#00000082]">Color : Black</p>
                  <p className="text-[#00000082]">Size : XL</p>
                </div>
              </div>
            </div>
            <div className="w-[20%] h-fit flex flex-col gap-4 justify-center items-start mt-8">
              <h1>192 ETB</h1>
            </div>
            <div className="w-[20%] h-fit flex flex-col gap-4 justify-center items-center mt-8">
              <div className="w-[50%] h-11 flex items-center  rounded-md overflow-hidden">
                <button
                  onClick={handlClickMinus}
                  className="w-11 h-11 text-5xl bg-[#DB4444] text-white flex justify-center items-center pb-3 "
                >
                  -
                </button>
                <p className=" w-1/2  h-11 text-2xl flex justify-center items-center font-semibold  border border-[#000000cc] ">
                  {amount}
                </p>
                <button
                  onClick={handlClickPlus}
                  className="w-11 h-11 text-5xl bg-[#DB4444] text-white flex justify-center items-center pb-3 "
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-[20%] h-fit flex  gap-4 justify-end items-end pr-4 mt-8">
              <h1>192 ETB</h1>
              <button className=" w-6 h-6 flex justify-center items-center  p-4 rounded-full bg-[#0000004c] hover:bg-[#e3dfdf] ">
              x
            </button>
            </div>
          </div>
        ))}
        <div className="  h-fit flex flex-col  gap-4 justify-end items-end  pb-10   mt-8">
          <div className=" w-[180px] h-11 flex items-center justify-start">
            <h1 className=" font-semibold text-xl">Total: 192 ETB</h1>
          </div>
          <div className=" w-[180px] h-[6px] bg-gradient-to-r from-green-300 to-green-600 flex items-center justify-start rounded-lg">
          </div>
          <div>
            <button className="w-[180px] h-11 bg-[#DB4444] text-white rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </section>
      <div className=" w-full h-fit  bottom-0 mt-32">
        <Footer />
      </div>
    </section>
  );
};

export default Cart;

