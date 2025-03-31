import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigation = useNavigate();
  const BtnShopPage = () => {
    navigation("/shop");
  };
  return (
    <div className="relative w-full h-[500px]">
      {/* Hình ảnh nền */}
      <img
        src="/ShopIphoneByReactJs/img/banner1.jpg"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Nội dung chữ hiển thị trên ảnh */}
      <div className="absolute inset-0 flex flex-col bg-opacity-50 text-white p-6 justify-center">
        <h2 className="text-lg md:text-xl font-semibold text-gray-400">
          NEW INSPIRATION 2024
        </h2>
        <h1 className="text-xl md:text-2xl font-bold mt-2 text-black">
          20% OFF ON NEW SEASON
        </h1>
        <button
          className="mt-4 px-6 py-2 bg-black hover:bg-gray-600 text-white font-semibold rounded-md shadow-lg transition max-w-fit"
          onClick={BtnShopPage}
        >
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
