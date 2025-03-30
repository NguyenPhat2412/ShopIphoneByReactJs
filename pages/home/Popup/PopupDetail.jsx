import { useDispatch, useSelector } from "react-redux";
import { HIDE_POPUP } from "../Redux/popupSlice";

const PopupDetail = () => {
  const dispatch = useDispatch();
  const { isOpen, product } = useSelector((state) => state.popup);

  if (!isOpen || !product) return null;

  return (
    <div style={{}}>
      <div
        className="fixed inset-0 bg-transition bg-opacity-50 flex items-center justify-center "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
          backdropFilter: "blur(5px)",
        }}
      >
        <div
          className="bg-white p-5 rounded-lg shadow-lg  py-20
       flex gap-50 "
          style={{ maxWidth: "1080px", width: "100%" }}
        >
          <div>
            <img
              src={product.img1}
              alt={product.name}
              className="w-800 h-100 object-cover rounded pl-10 pr-5"
            />
          </div>
          <div>
            <button
              className="absolute top-50 right-110 text-gray-500 hover:text-black transform "
              onClick={() => dispatch(HIDE_POPUP())}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mt-3">{product.name}</h2>
            <p className="text-red-500 font-semibold text-lg">
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
            </p>
            <p className="text-gray-600 mt-2 pr-10">{product.short_desc}</p>
            <button className="bg-black text-white px-4 py-2 rounded-md mt-6">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDetail;
