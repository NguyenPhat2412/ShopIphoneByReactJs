import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

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
    window.location.href = "/ShopIphoneByReactJs";
  };

  return (
    <>
      <nav className="navbar navbar-item items-center px-4 py-6 bg-white">
        <div
          className="flex justify-between"
          style={{ margin: "0 auto", maxWidth: "1080px" }}
        >
          <div className="flex space-x-4 gap-10">
            <Link to="/" className="font-bold" style={{ color: "#FFCC66" }}>
              Home
            </Link>
            <Link to="/shop">Shop</Link>
          </div>
          <div className="text-3xl">
            <h3>BOUTIQUE</h3>
          </div>
          <div className="flex space-x-4 gap-10">
            <Link to="/cart" className="flex gap-1">
              <i className="fa-solid fa-cart-flatbed"></i> Cart
            </Link>
            {!currentUser ? (
              <Link to="/login" className="flex gap-1">
                <i className="fa-solid fa-user"></i> Login
              </Link>
            ) : (
              <div className="flex gap-1">
                <i className="fa-solid fa-user"></i> {currentUser.fullName}
                <button
                  onClick={handleLogout}
                  style={{ marginLeft: "10px", marginBottom: "12px" }}
                >
                  {`(Logout)`}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBarHome;
