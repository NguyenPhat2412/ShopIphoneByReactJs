import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className=" p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={() => {
        navigate(`/detail/${product._id.$oid}`);
        console.log(`Product ${product._id.$oid} clicked!`);
      }}
    >
      <img
        src={product.img1}
        alt={product.name}
        className="w-full h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
      />
      <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
      <p className="text-red-500 font-bold text-xl">
        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
      </p>
    </div>
  );
};

export default ProductCard;
