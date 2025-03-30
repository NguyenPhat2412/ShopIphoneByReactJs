import { useState } from "react";
import ProductList from "./ProductList";

const ShopPage = () => {
  const [category, setCategory] = useState(""); // Lọc theo danh mục
  const [search, setSearch] = useState(""); // Tìm kiếm sản phẩm

  return (
    <div
      className="container mx-auto py-5"
      style={{ maxWidth: "1080px", margin: "0 auto" }}
    >
      {/* Tiêu đề */}
      <div className="bg-gray-100 p-20 rounded-lg shadow-md mb-6 flex justify-between ">
        <h1 className="text-3xl font-bold text-center mb-6 ">SHOP</h1>
        <h3 className="text-xl font-bold text-gray-400 text-center mb-6 ">
          SHOP
        </h3>
      </div>
      <div className="flex py-10">
        {/* Sidebar - Lọc danh mục */}
        <div className="w-1/4 pr-5">
          <h2 className="text-xl font-semibold mb-4 px pb-4">CATEGORIES</h2>
          <h2 className="text-xl font-semibold mb-4 bg-black px-4 text-white ">
            APPLE
          </h2>
          <ul className="space-y-2 rounded-lg px-2">
            {["All"].map((cat) => (
              <li
                key={cat}
                className={`p-2 cursor-pointer rounded ${
                  category === cat.toLowerCase()
                    ? "text-orange-400"
                    : "hover:bg-transition"
                }`}
                onClick={() =>
                  setCategory(cat === "All" ? "" : cat.toLowerCase())
                }
              >
                {cat}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-4 bg-gray-200 px-4 py-2">
            IPHONE & MAC
          </h2>
          <ul className="space-y-2  rounded-lg px-2">
            {["Iphone", "Ipad", "Macbook"].map((cat) => (
              <li
                key={cat}
                className={`p-2 cursor-pointer rounded ${
                  category === cat.toLowerCase()
                    ? "text-orange-400"
                    : "hover:bg-transition"
                }`}
                onClick={() =>
                  setCategory(cat === "All" ? "" : cat.toLowerCase())
                }
              >
                {cat}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-4 px-4 py-2 bg-gray-200">
            WIRELESS
          </h2>
          <ul className="space-y-2  rounded-lg px-2">
            {["Airpod", "Watch"].map((cat) => (
              <li
                key={cat}
                className={`p-2 cursor-pointer rounded ${
                  category === cat.toLowerCase()
                    ? "text-orange-400"
                    : "hover:bg-transition"
                }`}
                onClick={() =>
                  setCategory(cat === "All" ? "" : cat.toLowerCase())
                }
              >
                {cat}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-4 px-4 py-2 bg-gray-200">
            OTHER
          </h2>
          <ul className="space-y-2  rounded-lg px-2">
            {["Mouse", "Keyboard", "Other"].map((cat) => (
              <li
                key={cat}
                className={`p-2 cursor-pointer rounded ${
                  category === cat.toLowerCase()
                    ? "text-orange-400"
                    : "hover:bg-transition"
                }`}
                onClick={() =>
                  setCategory(cat === "All" ? "" : cat.toLowerCase())
                }
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Khu vực danh sách sản phẩm */}
        <div className="w-3/4 ">
          {/* Thanh tìm kiếm */}
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Enter Search Here..."
              className="border border-gray-400 p-2 rounded w-1/3 shadow-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select className="border p-2 rounded shadow-md">
              <option value="default">Default sorting</option>
              <option value="asc">DESC</option>
              <option value="desc">ASC</option>
            </select>
          </div>

          {/* Hiển thị danh sách sản phẩm */}
          <div className="py-5">
            <ProductList category={category} search={search} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
