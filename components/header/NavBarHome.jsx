// import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const NavBarHome = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    alert("Đăng xuất thành công!");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar navbar-item items-center px-4 py-6 bg-white">
        <div
          className="flex justify-between "
          style={{ margin: "0 auto", maxWidth: "1080px" }}
        >
          <div className="flex space-x-4 gap-10">
            <a
              href="/ShopIphoneByReactJs/"
              className="font-bold"
              style={{ color: "#FFCC66" }}
            >
              Home
            </a>
            <a href="/ShopIphoneByReactJs/shop">Shop</a>
          </div>
          <div className="text-3xl">
            <h3>BOUTIQUE</h3>
          </div>
          <div className="flex space-x-4 gap-10">
            <a href="/ShopIphoneByReactJs/cart" className="flex gap-1">
              <i className="fa-solid fa-cart-flatbed"></i>Cart
            </a>
            {!currentUser ? (
              <a href="/ShopIphoneByReactJs/login" className="flex gap-1">
                <i className="fa-solid fa-user"></i> Login
              </a>
            ) : (
              <a href="/ShopIphoneByReactJs/login" className="flex gap-1">
                <i className="fa-solid fa-user"></i> {currentUser.fullName}
                <button
                  onClick={handleLogout}
                  style={{ marginLeft: "10px", marginBottom: "12px" }}
                >
                  {`(Logout)`}
                </button>
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBarHome;
