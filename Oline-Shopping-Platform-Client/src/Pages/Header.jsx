import { useState } from "react";
import cart from "../assets/Cart.svg";
import user from "../assets/user.png";
import bg from "../assets/bg1.jpg";
import search from "../assets/NavIcons/search.svg";
import Catagory from "./Catagory";
import Footer from "../component/Footer";
import About from './about';
const data = [
  { name: "Home", link: "#", id: 1 },
  { name: "product", link: "/Products", id: 2 },
  { name: "Service", link: "#", id: 3 },
  { name: "Contuct us", link: "#", id: 4 },
  { name: "About", link: "#", id: 5 },
];
const Header = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <>
      <div
        className="w-full lg:h-fit h-fit pb-4 bg-cover bg-bottom "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="h-16 bg-transparent flex items-center justify-around">
          <div className="text-2xl text-[#2C3E50] font-extrabold  ">
            Ecommerce
          </div>
          <div>
            <ul className="lg:flex text-white font-medium space-x-6 hidden ">
              {data.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setIsActive(item.id)}
                  className={` px-4 py-2 ${
                    isActive == item.id
                      ? "bg-red-950 rounded-md text-white"
                      : ""
                  }`}
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-7">
            <div className=" flex justify-start items-center px-2  rounded-2xl  h-fit border bg-gray-200">
              <input
                className=" hidden md:flex text-gray-950 h-full w-60  px-1   text-sm    bg-gray-200 focus:outline-none "
                type="search"
                placeholder="what do you need?"
              />

              <button className=" h-fit    ">
                <img src={search} alt="" />
              </button>
            </div>
            <div className=" flex gap-3">
              <button className="w-8">
                <img className="w-full" src={cart} alt="" />
              </button>

              <button className="w-7 ">
                <img src={user} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-fit sm-fit mt-10 gap-6 flex justify-end lg:pr-10">
          <div className="w-full lg:w-1/2 max-md:md-auto bg-black bg-opacity-50 p-20 gap-8 flex flex-col rounded-lg max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white ">
              Discover the Latest Trends
            </h1>
            <p className="text-lg md:text-2xl font-medium text-gray-200 mt-8 ">
              Shop the best deals on fashion, electronics, and more. Upgrade
              your lifestyle with our premium collections, all in one place.
            </p>
            <div className="mt-4">
              <button
                onClick={() => {setIsActive(2); window.location.href = "/Products"} }
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-blue-700"
              >
                Shop Now
              </button>
              <button className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium text-lg ml-4 hover:bg-gray-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Catagory />
      <About/>
      <Footer />
    </>
  );
};

export default Header;
