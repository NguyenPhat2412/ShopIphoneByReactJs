import { useState } from "react";

const QuantitySelector = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  // Giảm số lượng (tối thiểu là 1)
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Tăng số lượng
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center space-x-4 p-2 rounded-xl justify-between w-3/4 ">
      <div className="flex justify-between w-full border ">
        {/* Label */}
        <span className="text-gray-400 font-semibold justify-center items-center flex px-3">
          QUANTITY
        </span>
        <div>
          {/* Nút giảm */}
          <button
            onClick={decreaseQuantity}
            className=" px-3 py-1 rounded-md text-lg hover:bg-gray-300"
          >
            &lt;
          </button>

          {/* Hiển thị số lượng */}
          <span className="font-bold text-lg">{quantity}</span>

          {/* Nút tăng */}
          <button
            onClick={increaseQuantity}
            className=" px-3 py-1 rounded-md text-lg  hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Nút "Add to cart" */}
      <button
        onClick={() => onAddToCart(quantity)}
        className="bg-black text-white px-5 py-2  hover:bg-gray-800 transition w-50"
      >
        Add to cart
      </button>
    </div>
  );
};

export default QuantitySelector;
