import Banner from "../../components/header/Banner";
import HomeDifferentInfo from "./HomeDifferentInfo";
import HomeImg from "./HomeImg";
import HomeTopImg from "./HomeTopImg";
import PopupDetail from "../../pages/home/Popup/PopupDetail";
// import PopupDetail from "./Popup/PopupDetail";

const HomePage = () => {
  return (
    <div
      className="w-full h-full flex justify-center flex-col"
      style={{ margin: "0 auto", maxWidth: "1080px" }}
    >
      <Banner />
      <div className="p-10">
        <h1 className="text-xl font-bold text-center">
          CARE CREATED COLLECTIONS
        </h1>
        <p className="text-2xl text-center">BROWSE OUR CATEGORIES</p>
      </div>
      <HomeImg />
      <div className="pt-10">
        <h2 className="text-gray-500">MADE THE HARD WAY</h2>
        <p className="text-2xl">TOP TRENDING PRODUCTS</p>
      </div>
      <HomeTopImg />
      <PopupDetail />
      <HomeDifferentInfo />
    </div>
  );
};
export default HomePage;
