import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import { store } from "../pages/home/Redux/store.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/ShopIphoneByReactJs/">
      <App />
    </BrowserRouter>
  </Provider>
);
