import NavBar from "../component/NavBar";
import heart from "../assets/NavIcons/HeartIcon.svg";
import Barkstart from "../assets/ProductCard_Icons/Vector.svg";
import start from "../assets/ProductCard_Icons/StarLight.svg";
import car from "../assets/ProductCard_Icons/icon-delivery.svg";
import Return from "../assets/ProductCard_Icons/Icon-return.svg";
import Footer from "../component/Footer";
import ProductCard from "../component/ProductCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const [amount, setAmount] = useState(1);
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  let rating = reviews.length > 0 && !isNaN(reviews[0].rating) ? Math.floor(reviews[0].rating) : 4;
  
  const handlClickMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handlClickPlus = () => {
    if (amount < product.stock) {
      setAmount(amount + 1);
    }
  };
  
  const productId = location.state.id;
  const products = location.state.products;
  const products4 = products.slice(0, 4);

  useEffect(() => {
    const url =
      "http://localhost:8080/Oline_Shopping_Platform_war_exploded/ProductDetailsServlet";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: productId }), // Send product ID as JSON
        });

        if (!response.ok) {
          // Handle HTTP errors
          throw new Error(
            `HTTP Error: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json(); // Parse JSON response
        setProduct(data.product);
        setReviews(data.reviews);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  const userId = sessionStorage.getItem("userId");
  console.log("User ID:", userId);

  return (
    <section className=" w-full   h-fit  flex flex-col justify-center items-center">
      <div className="w-full   ">
        <NavBar />
      </div>
      <div className="w-full h-1/2 flex  justify-center items-center mt-8">
        <div className="w-full max-w-7xl h-1/2 flex justify-start i">
          <p className=" ">
            <span className=" text-[#00000082]">Category /</span> Product Name
          </p>
        </div>
      </div>
      <section className="w-full   h-fit max-w-7xl flex gap-8  items-center justify-center">
        <div className="w-[20%] flex flex-col gap-4 justify-center items-center mt-8">
          <div className="w-full max-w-[170px] h-[200px] max-h-[140px] flex justify-center items-center  bg-[#F5F5F5] rounded-md bg-contain">
            <img
              className=" object-contain w-1/2  "
              src={product.imageUrl}
              alt=""
            />
          </div>
          <div className="w-full max-w-[170px] h-[200px] max-h-[140px] flex justify-center items-center  bg-[#F5F5F5] rounded-md">
            <img
              className=" object-contain w-1/2  "
              src={product.imageUrl}
              alt=""
            />
          </div>
          <div className="w-full max-w-[170px] h-[200px] max-h-[140px] flex justify-center items-center  bg-[#F5F5F5] rounded-md">
            <img
              className=" object-contain w-1/2  "
              src={product.imageUrl}
              alt=""
            />
          </div>
          <div className="w-full max-w-[170px] h-[200px] max-h-[140px] flex justify-center items-center  bg-[#F5F5F5] rounded-md">
            <img
              className=" object-contain w-1/2  "
              src={product.imageUrl}
              alt=""
            />
          </div>
        </div>
        <div className="w-[38%] h-[605px] flex justify-center items-center bg-[#F5F5F5] rounded-md mt-8">
          <div className="w-full h-full  flex justify-center items-center  ">
            <img
              className=" object-contain w-1/2  "
              src={product.imageUrl}
              alt=""
            />
          </div>
        </div>

        <div className="w-[38%] h-[600px] p-4 flex flex-col gap-4   mt-8">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <div className="w-full h-8 flex items-center   gap-4 ">
            <div className=" w-28 h-4 flex justify-between items-center">
              {[...Array(rating)].map((_, index) => (
                <img
                  key={index}
                  className=" w-8 h-full"
                  src={start}
                  alt="start"
                />
              ))}
              {[...Array(5 - rating)].map((_, index) => (
                <img
                  key={index}
                  className=" w-8 h-full"
                  src={Barkstart}
                  alt="start"
                />
              ))}
            </div>
            <p className="text-[#00000082]">(150 - Review)</p>
            <p className="text-[#00000082]">|</p>
            <span className=" text-[#00FF66]">
              {product.stock > 1 ? "In stock" : "Out of stock"}
            </span>
          </div>
          <div className="w-full h-8 flex items-center   gap-4 ">
            <p className="text-2xl font-semibold">{product.price} ETB</p>
          </div>
          <p>{product.description}</p>
          <hr className="w-full h-[2px] bg-[#00000036] " />
          <div className="w-full h-11 flex items-center justify-between">
            <div className="w-[38%] h-ful flex items-center  rounded-md overflow-hidden">
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
            <div className="w-{38%] h-full flex items-center gap-4">
              <button className="w-[180px] h-11 bg-[#DB4444] text-white rounded-md">
                Buy Now
              </button>
            </div>
            <div className=" w-[10%] h-full flex items-center justify-center border border-[#000000cc] rounded-md">
              <img src={heart} alt="" />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col items-center mt-8 border border-[#000000cc] rounded-md">
            <div className="w-full h-24 flex items-center border-b border-[#000000cc] ">
              <div className="w-[20%] h-full flex items-center justify-center ">
                <img src={car} alt="car" />
              </div>
              <div className="w-[75%] h-full flex flex-col   justify-center gap-1">
                <h1 className=" font-semibold">Free Delivery</h1>
                <p className=" text-xs font-semibold">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="w-full h-24 flex items-center">
              <div className="w-[20%] h-full flex items-center justify-center ">
                <img src={Return} alt="car" />
              </div>
              <div className="w-[75%] h-full flex flex-col   justify-center gap-1">
                <h1 className=" font-semibold">Return Delivery</h1>
                <p className=" text-xs font-semibold">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-fit max-w-7xl flex flex-col mt-20">
        <div className="w-full h-10 flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-md "></div>
          <h1 className="text-2xl text-[#DB4444] font-semibold">
            Related Products
          </h1>
        </div>
        <div className="w-full h-fit grid grid-cols-4 gap-4  p-4 mt-6 overflow-auto">
            <ProductCard products={products4} />
        </div>
      </section>
      <div className=" w-full h-fit  bottom-0 mt-32">
        <Footer />
      </div>
    </section>
  );
};

export default ProductDetails;
