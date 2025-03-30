import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../CartPage/CartSlice";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const handleAddToCart = () => {
    // alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`);
    dispatch(ADD_CART({ ...product, quantity: 1 }));
    // Thêm logic cập nhật giỏ hàng tại đây
  };

  const API_URL =
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => item._id.$oid === id);
        console.log("foundProduct", foundProduct);
        setProduct(foundProduct);

        // Lọc ra sản phẩm liên quan
        const related = data.filter(
          (item) =>
            item.category === foundProduct?.category && item._id.$oid !== id
        );
        setRelatedProducts(related);
      })
      .catch((err) => console.error("Lỗi tải dữ liệu:", err));
  }, [id]);

  if (!product) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div
      className="container mx-auto p-5"
      style={{ maxWidth: "1080px", margin: "0 auto" }}
    >
      {/* Chi tiết sản phẩm */}
      <div className="flex gap-10">
        {/* Hình ảnh */}
        <div className="w-1/2">
          <img
            src={product.img1}
            alt={product.name}
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-2xl py-5">
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
          </p>
          <p className="mt-4 text-gray-700">{product.short_desc}</p>
          <p className="py-4">
            <b>CATEGORY:</b> {product.category}
          </p>
          <QuantitySelector onAddToCart={handleAddToCart} />
        </div>
      </div>
      <div className="py-10">
        <button
          className="py-5 bg-black text-white px-4 mb-10"
          style={{ marginTop: "10px" }}
        >
          DESCRIPTION
        </button>
        <p className="py-4">PRODUCT DESCRIPTION</p>
        <span style={{ whiteSpace: "pre-line" }}>{product.long_desc}</span>
      </div>

      {/* Sản phẩm liên quan */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold pb-4">Sản phẩm liên quan</h2>
        <div className="grid grid-cols-3 gap-6">
          {relatedProducts.length === 0 ? (
            <p>Không có sản phẩm liên quan.</p>
          ) : (
            relatedProducts.map((related) => (
              <div
                key={related._id}
                className=" p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => navigate(`/detail/${related._id.$oid}`)}
              >
                <img
                  src={related.img1}
                  alt={related.name}
                  className="w-full h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <h3 className="mt-3 font-semibold text-lg">{related.name}</h3>
                <p className="text-red-500 font-bold text-xl">
                  {related.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  đ
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
