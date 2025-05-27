// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.pages.jsx";
import LoginPage from "./pages/login.pages.jsx";
import SignupPage from "./pages/signup.pages.jsx";
import UpdateProfile from "./pages/profile.pages.jsx";
import ShopCartPage from "./pages/shopcart.pages.jsx";
import ForgotPassword from "./pages/forgot-password.pages.jsx";
import ResetPassword from "./pages/reset-password.pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<UpdateProfile />} />
        <Route path="/shopcart" element={<ShopCartPage />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
