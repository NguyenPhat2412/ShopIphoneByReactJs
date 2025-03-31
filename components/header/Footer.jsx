import { useEffect, useState } from "react";

const Footer = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetch("/ShopIphoneByReactJs/footer.json") // Đường dẫn đến file JSON
      .then((res) => res.json())
      .then((data) => setColumns(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8 justify-center items-center ">
      <div
        className="container pl-4 "
        style={{ margin: "0 auto", maxWidth: "1080px" }}
      >
        <div className="grid grid-cols-3 gap-36">
          {columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{column.col_name}</h4>
              <ul>
                {column.col_values.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a href="#" className="hover:text-gray-400 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} NguyenXuanPhat
        </div>
      </div>
    </footer>
  );
};

export default Footer;
