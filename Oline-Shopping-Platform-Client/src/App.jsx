import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import UserDetails from "./Pages/UserDetails";
import ProductDetails from "./Pages/ProductDetails";
import ProductListing from "./Pages/ProductListing";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/Forms/SignUp";
import LogIn from "./Pages/Forms/LogIn";
import ProtectedRoute from "./component/ProtectedRoute"; // Import the ProtectedRoute component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Header />
            </ProtectedRoute>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />

        {/* Protected routes */}
        <Route
          path="/Account"
          element={
            <ProtectedRoute>
              <UserDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Details"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Products"
          element={
            <ProtectedRoute>
              <ProductListing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
