import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ category, search }) => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const API_URL =
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoaded(true);
      })
      .catch((err) => console.error("Lỗi tải dữ liệu:", err));
  }, []);

  // ✅ Lọc sản phẩm theo danh mục & từ khóa tìm kiếm
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = search
      ? product.name.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className={`grid grid-cols-3 gap-6 transform transition-all duration-500${
        isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      // style={{ transition: "scale()" }}
    >
      {filteredProducts.length === 0 ? (
        <p>Không tìm thấy sản phẩm phù hợp.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
