import CartButton from "../component/CartButton";
import Barkstart from "../assets/ProductCard_Icons/Vector.svg";
import Lightstart from "../assets/ProductCard_Icons/StarLight.svg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const products = props.products || []; // Ensure 'products' is passed correctly from the parent

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <div
            onClick={() => navigate("/Details", { state: { id: product.id, products: products } })}
            key={product.id}
            className="w-fit max-w-[320px] h-auto max-h-[420px] rounded-lg shadow-2xl flex flex-col justify-between items-center overflow-hidden"
          >
            <div className="w-full h-[240px] bg-gray-200 rounded-md">
              <img
                className="w-full h-full object-contain"
                src={product.image_url || "../assets/bg.jpg"} // Fallback to default image if none available
                alt={product.name}
              />
            </div>
            <div className="w-11/12 rounded-md">
              <div className=" relative  w-full flex flex-row gap-24 items-center mt-2">
                <h1 className="font-bold max-w-44 h-fit text-wrap">
                  {product.name}products
                </h1>
                <div className=" absolute right-10 top-0  w-6 h-6 flex justify-center items-center">
                  {[...Array(product.rating)].map((_, index) => (
                    <img key={index} src={Lightstart} alt="star" />
                  ))}
                  {[...Array(5 - product.rating)].map((_, index) => (
                    <img key={index} src={Barkstart} alt="star" />
                  ))}
                </div>
              </div>
              <h2 className="font-bold">{product.price} ETB</h2>
            </div>
            <div className="w-11/12">
              <p className="text-[#585858] text-sm text-wrap">
                {product.description}
              </p>
            </div>
            <div onClick={handleClick} className="w-[300px] h-[50px] mt-2">
              <CartButton />
            </div>
          </div>
        ))
      ) : (
        <p>No products found</p> // Fallback text when no products exist
      )}
    </>
  );
};

ProductCard.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductCard;
