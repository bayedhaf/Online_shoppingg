import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LogIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/Oline_Shopping_Platform_war_exploded/checkSession",
        { withCredentials: true } // Ensure cookies are sent
      )
      .then((response) => {
        console.log("Session Check Response:", response.data);
        if (response.data.authenticated) {
          navigate("/"); // Navigate to the homepage if authenticated
        }
      })
      .catch((error) => {
        console.error("Session Check Error:", error);
      });
  }, [navigate]);
  

  const handleLogin = (email, password) => {
    axios
      .post(
        "http://localhost:8080/Oline_Shopping_Platform_war_exploded/LogIn",
        { email, password },
        { withCredentials: true } // Include this to send cookies
      )
      .then((response) => {
        console.log("Login Response:", response.data);
        if (response.data.success) {
          navigate("/"); // Navigate to the homepage on successful login
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };
  

  return <Form signup={true} Port={"/signUp"} handleSubmit={handleLogin} />;
};

export default LogIn;
