import { useNavigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (email, password, Name) => {
    if (email === "" || Name === "" || password === "") {
      navigate("/signUp");
      alert("Please fill all the fields");
      return false;
    }

    axios
      .post("http://localhost:8080/Oline_Shopping_Platform_war_exploded/SignUp", {
        name: Name,
        email: email,
        password: password,
      })
      .then((response) => {
        const responseData =
          typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        console.log(responseData);
        if (responseData.message === "User registered successfully") {
          navigate("/logIn");
        } else if (responseData.message === "User already exists") {
          alert("User already exists");
        } else {
          alert("Error! Please try again.");
        }
      })
      .catch((error) => {
        console.error(error, " here");
        alert("An error occurred! Please try again.");
      });

    return true;
  };

  return <Form signup={false} handleSubmit={handleSignUp} Port={"/logIn"} />;
};

export default SignUp;
