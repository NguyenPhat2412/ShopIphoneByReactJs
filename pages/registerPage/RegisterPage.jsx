import { useState } from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!email || !password || !fullName || !phone) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("userArr")) || [];
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setError("Email này đã được đăng ký!");
      return;
    }

    users.push({ email, password, fullName, phone });
    localStorage.setItem("userArr", JSON.stringify(users));
    alert("Đăng ký thành công! Chuyển hướng đến trang đăng nhập...");
    window.location.href = "/ShopIphoneByReactJs/login";
  };

  return (
    <div className="container-register">
      <div className="flex items-center justify-center min-h-155">
        <div className="w-120 p-10 bg-white rounded-lg ">
          <h1 className="text-2xl font-bold text-center py-12 mb-4">Sign Up</h1>
          <input
            placeholder="Full Name"
            type="text"
            className="w-full p-5 border border-gray-300 rounded mb-3"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-5 border border-gray-300 rounded mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-5 border border-gray-300 rounded mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-5 border border-gray-300 rounded mb-3"
            onChange={(e) => setPhone(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            className="w-full bg-gray-800 text-white p-5 rounded hover:bg-blue-600"
            style={{ marginTop: "10px" }}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <div className="text-center mt-3 pt-6">
            Login?
            <Link
              to="/login"
              className="text-blue-500 px-1"
              style={{ color: "#00CCCC" }}
            >
              Click
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
