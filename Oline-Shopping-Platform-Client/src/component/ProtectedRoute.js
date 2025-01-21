import axios from "axios";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
  axios
    .get(
      "http://localhost:8080/Oline_Shopping_Platform_war_exploded/checkSession",
      { withCredentials: true } // Ensure cookies are sent
    )
    .then((response) => {
      console.log("Session Check Response:", response.data);
      setIsAuthenticated(response.data.authenticated);
      if (response.data.authenticated) {
        console.log("Authenticated");
      }
    })
    .catch((error) => {
      setIsAuthenticated(false);
      console.error("Session Check Error:", error);
    });
}, [navigate]);


  // While checking authentication, return nothing or loading indicator
  if (isAuthenticated === null) {
    return null; // You can replace this with a loading spinner if needed
  }

  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    navigate("/LogIn");
    return ;
  }

  // If user is authenticated, render the protected route
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
