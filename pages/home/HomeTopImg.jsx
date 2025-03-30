import { useEffect, useState } from "react";
// import MoveDetail from "./MoveDetail";
import { useDispatch } from "react-redux";
// import useFetch from "../../src/useFetch";
import { SHOW_POPUP } from "./Redux/popupSlice";

// fetch data
const HomeTopImg = () => {
  const FIREBASE_URL =
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(FIREBASE_URL)
      .then((res) => res.json())
      // Giới hạn danh sách sản phẩm tối đa 8 sản phẩm
      .then((data) => setProducts(data.slice(0, 8)))
      .catch((err) => console.error("Error loading images:", err));
  }, []); // ✅ Thêm dependency array để tránh gọi API liên tục

  // Hàm định dạng giá tiền
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="flex justify-center items-center pb-10">
      <div className="grid grid-cols-4 gap-6 py-4">
        {!products.length ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className=" p-4 items-center rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => dispatch(SHOW_POPUP(product))}
            >
              <img
                src={product.img1}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg "
              />
              <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
              <p className="text-red-500 font-bold text-xl ">
                {formatPrice(product.price)} đ
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeTopImg;
