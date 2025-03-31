import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
// import ShopPage from "../pages/shop/ShopPage";
import DetailPage from "../pages/detail/DetailPage";
import "./App.css";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import CartPage from "../pages/CartPage/CartPage";
import ShopPage from "../pages/shopPage/ShopPage";
// import NavBarHome from "../components/header/NavBarHome";
import Header from "../components/header/Header";
import Footer from "../components/header/Footer";
import LiveChat from "../pages/Chart(upgrade)/LiveChat";
import ChatBubble from "../pages/Chart(upgrade)/ChatBubble";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/ShopIphoneByReactJs/" element={<HomePage />} />
          <Route path="/ShopIphoneByReactJs/shop" element={<ShopPage />} />
          <Route
            path="/ShopIphoneByReactJs/detail/:id"
            element={<DetailPage />}
          />
          <Route path="/ShopIphoneByReactJs/cart" element={<CartPage />} />
          <Route
            path="/ShopIphoneByReactJs/checkout"
            element={<CheckOutPage />}
          />
          <Route path="/ShopIphoneByReactJs/login" element={<LoginPage />} />
          <Route
            path="/ShopIphoneByReactJs/register"
            element={<RegisterPage />}
          />
        </Routes>
      </BrowserRouter>
      <LiveChat isOpen={isOpen} />
      <ChatBubble toggleChat={toggleChat} isOpen={isOpen} />
      <Footer />
    </>
  );
}

export default App;
