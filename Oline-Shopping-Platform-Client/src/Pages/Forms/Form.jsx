import { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/photo_2024-12-03_09-36-25(1)(1)_enhanced.png";
import { Link } from "react-router-dom";

const Form = ({ signup, handleSubmit, Port }) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [Password, setPassword] = useState("");

  const validateEmail = (Email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(Email);
  };

  const handleNameFocus = () => {
    setIsNameFocused((prev) => !prev);
  };

  const handleUserFocus = () => {
    setIsFocused(true);
    setEmailError("");
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused((prev) => !prev);
  };

  const handleEmailBlur = (e) => {
    const inputValue = e.target.value;
    if (!inputValue) {
      setEmailError("Email is required.");
    } else if (!validateEmail(inputValue)) {
      setEmailError("Please enter a valid email address.");
    }
    setIsFocused(false);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (!emailError) {
      if (validateEmail(inputValue)) {
        setEmailError("");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="max-w-[400px] w-full h-full flex flex-col items-center py-8">
        <div className="w-16 h-16 rounded-full bg-white mb-[30%]">
          <img src={logo} alt="ASTU Chat logo" />
        </div>
        <h1 className="relative text-4xl font-semibold mb-8">
          {signup ? "Welcome Back" : "Create an account"}
        </h1>
        <div className="w-[90%] h-36">
          {!signup && (
            <div className="relative w-full">
              <label
                htmlFor="Name"
                className={`absolute top-4 left-4 bg-white text-gray-600 font-normal text-base mb-2 max-w-[90%] pointer-events-none text-ellipsis origin-top transition-all duration-150 ease-in-out whitespace-nowrap z-10 ${
                  isNameFocused || Name !== ""
                    ? "scale-90 -translate-x-2 -translate-y-7 text-[#10a37f] bg-white"
                    : ""
                }`}
              >
                Name*
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                autoComplete="true"
                onFocus={handleNameFocus}
                onBlur={handleNameFocus}
                onChange={(e) => setName(e.target.value)}
                className="border pl-4 border-[#c2c8d0] w-full h-14 text-[#2d333a] mb-6 rounded-md focus:border-[#10a37f] focus:outline-none"
              />
            </div>
          )}

          <div className="relative w-full mb-6">
            <label
              htmlFor="Email"
              className={`absolute top-4 left-4 bg-white text-gray-600 font-normal text-base mb-2 max-w-[90%] pointer-events-none text-ellipsis origin-top transition-all duration-300 ease-in-out whitespace-nowrap z-10 ${
                isFocused || Email !== ""
                  ? "scale-90 -translate-x-2 -translate-y-7 text-[#10a37f] bg-white"
                  : ""
              }`}
            >
              Email address*
            </label>
            <input
              type="email"
              required
              id="Email"
              autoComplete="true"
              onFocus={handleUserFocus}
              onBlur={handleEmailBlur}
              onChange={handleChange}
              name="Email"
              value={Email}
              className="border pl-4 border-[#c2c8d0] w-full h-14 text-[#2d333a] rounded-md focus:border-[#10a37f] focus:outline-none"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="relative w-full">
            <label
              htmlFor="password"
              className={`absolute top-4 left-4 bg-white text-gray-600 font-normal text-base mb-2 max-w-[90%] pointer-events-none text-ellipsis origin-top transition-all duration-150 ease-in-out whitespace-nowrap z-10 ${
                isPasswordFocused || Password !== ""
                  ? "scale-90 -translate-x-2 -translate-y-7 text-[#10a37f] bg-white"
                  : ""
              }`}
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordFocus}
              onChange={(e) => setPassword(e.target.value)}
              className="border pl-4 border-[#c2c8d0] w-full h-14 text-[#2d333a] mb-6 rounded-md focus:border-[#10a37f] focus:outline-none"
            />
          </div>
          <button
            disabled={!!emailError && Password !== "" && Name !== ""}
            onClick={(e) => {
              e.preventDefault();
              if (signup) {
                handleSubmit(Email, Password);
              } else {
                handleSubmit(Email, Password, Name);
              }
            }}
            type="submit"
            className="w-full h-14 bg-[#10a37f] text-white rounded-md hover:bg-[#10a37ebd] active:bg-[#10a37ebd] active:scale-95"
          >
            {signup ? "Log In" : "Sign Up"}
          </button>

          <div className="w-full h-14 flex justify-center items-center">
            <span className="text-gray-600 text-base font-normal">
              {signup ? "Don't have an account?" : "Already have an account?"}
              <Link to={Port} className="text-[#10a37f] pl-2">
                {signup ? "Sign Up" : "Log In"}
              </Link>
            </span>
          </div>
          <div className="w-full h-14 flex justify-center items-center mb-4">
            <hr className="border border-[#c4c2c0] h-[1px] w-1/2" />
            <span className="text-gray-600 text-sm font-normal mx-2">OR</span>
            <hr className="h-[1px] border border-[#c4c2c0] w-1/2" />
          </div>
          <div className="h-14 w-full border border-[#c2c8d0] rounded-md flex items-center px-4 gap-5 hover:bg-[#e6e8e6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="36px"
              height="36px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <p>Continue With Google</p>
          </div>
          <p className="absolute bottom-3.5 left-[35%] md:left-[45%] text-[#10a37f] text-xs">
            &copy; copyright 2022-2024 Mohammed-Business-Group
          </p>
        </div>
      </div>
    </div>
  );
};
Form.propTypes = {
  signup: PropTypes.bool.isRequired,
  Port: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
