import search from "../assets/NavIcons/search.svg";
import heart from "../assets/NavIcons/HeartIcon.svg";
import cart from "../assets/NavIcons/Cart1.svg";
import user from "../assets/NavIcons/user.svg";
import order from "../assets/NavIcons/icon-mallbag.svg";
import Logout from "../assets/NavIcons/Icon-logout.svg";
import Review from "../assets/NavIcons/Icon-Reviews.svg";
import userIcon from "../assets/NavIcons/userIcon.svg";
import "./Nav.css";
import { useState, useRef } from "react";

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <section className=" w-full h-20  flex justify-center items-center body-font border-b border-[#b9b9b9] py-14">
      <nav className=" w-full max-w-7xl flex justify-between items-center md:px-6">
        <ul className=" w-full flex justify-between items-center    ">
          <li className=" w-12 h-12 flex  items-center ">
            <a href="/" className=" ">
              <h1 className="text-2xl ">Exclusive</h1>
            </a>
          </li>

          <div className="  h-full flex justify-between gap-9 items-center">
            <li>
              <a href="/" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="nav-item">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-item">
                Contact
              </a>
            </li>
          </div>
          <div className=" h-full inline-flex justify-between items-center gap-2">
            <li className=" w-72  h-full  flex items-center bg-[#F5F5F5]  relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className=" w-full pl-4 h-[38px]  py-5 rounded-md bg-[#F5F5F5]  text-white"
              />
              <img
                src={search}
                alt="search"
                className="w-6 h-6 absolute left-[88%] "
              />
            </li>
            <li>
              <a href="/account" className="nav-item">
                <img src={heart} alt="heart" className=" " />
              </a>
            </li>
            <li>
              <a href="/cart" className="nav-item">
                <img src={cart} alt="cart" className=" " />
              </a>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative z-20"
            >
              <a href="/account" className="nav-item">
                <img src={user} alt="user" className="nav-icon" />
                {isMenuVisible && (
                  <div
                    ref={menuRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-10 right-4 w-[280px] h-fit bg-[#000000be] rounded-md flex flex-col justify-center items-center pt-5 pb-1"
                  >
                    <div className="w-full flex gap-4 justify-start items-center py-3 pl-6 hover:bg-[#000000]">
                      <img src={userIcon} alt="user" className="w-8 h-8" />
                      <h1 className="text-white">Manage My Account</h1>
                    </div>
                    <div className="w-full flex gap-4 justify-start items-center py-3 pl-6 hover:bg-[#000000]">
                      <img src={order} alt="order" className="w-8 h-8" />
                      <h1 className="text-white">My Order</h1>
                    </div>
                    <div className="w-full flex gap-4 justify-start items-center py-3 pl-6 hover:bg-[#000000]">
                      <img src={Review} alt="review" className="w-8 h-8" />
                      <h1 className="text-white">My Review</h1>
                    </div>
                    <div className="w-full flex gap-4 justify-start items-center py-3 pl-6 hover:bg-[#000000]">
                      <img src={Logout} alt="logout" className="w-8 h-8" />
                      <h1 className="text-white">Logout</h1>
                    </div>
                  </div>
                )}
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
