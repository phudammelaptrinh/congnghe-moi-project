// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.pages.jsx";
import LoginPage from "./pages/login.pages.jsx";
import SignupPage from "./pages/signup.pages.jsx";
import UpdateProfile from "./pages/profile.pages.jsx";
import ShopCartPage from "./pages/shopcart.pages.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<UpdateProfile />} />
        <Route path="/shopcart" element={<ShopCartPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
