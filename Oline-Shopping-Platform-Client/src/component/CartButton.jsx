import cart from "../assets/ProductCard_Icons/cart.png";

const CartButton = () => {
  return (
    <div className="w-full  h-full ">
      <button className="w-full h-full py-4 font-semibold text-xl  bg-[#DB4444] text-white flex justify-center items-center gap-4 ">
        Add To Cart
        <img className="w-8 h-8" src={cart} alt="cart" />
      </button>
    </div>
  );
};

export default CartButton;
