import { useEffect, useState } from "react";

const HomeImg = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("/ShopIphoneByReactJs/Img.json") // Kiểm tra đường dẫn này có đúng không
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error loading images:", err));
  }, []);

  return (
    <div className=" mx-auto p-4" style={{ maxWidth: "1080px" }}>
      {!items ? (
        <p className="text-center text-lg font-semibold">Loading images...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Hàng 1: Hiển thị 2 ảnh */}
          <div className="grid grid-cols-2 gap-4">
            {items.photos?.slice(0, 2).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h- 50 object-cover rounded-lg duration-300 hover:scale-110 cursor-pointer"
              />
            ))}
          </div>
          {/* Hàng 2: Hiển thị 3 ảnh */}
          <div className="grid grid-cols-3 gap-4">
            {items.photos?.slice(2, 5).map((img, index) => (
              <img
                key={index + 2}
                src={img}
                alt={`Product ${index + 3}`}
                className="w-full h-60 object-cover rounded-lg duration-300 hover:scale-110 cursor-pointer"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeImg;
