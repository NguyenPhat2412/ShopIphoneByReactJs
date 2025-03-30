export default function HomeDifferentInfo() {
  return (
    <>
      <div className="bg-gray-100 px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="font-bold text-xl">FREE SHIPPING</h2>
            <p className="text-gray-500">Free Shipping worlwide</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">24 X 7 SERVICE</h2>
            <p className="text-gray-500">Free Shipping worlwide</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">FESTIVAL OFFER</h2>
            <p className="text-gray-500">Free Shipping worlwide</p>
          </div>
        </div>
      </div>
      <div className="py-20 flex justify-between ">
        <div>
          <h2 className="font-bold text-xl">{`LET'S BE FRIENDS!`}</h2>
          <p className="text-gray-500">
            Nisi nisi tempor consequat laboris nisi.
          </p>
        </div>
        <div className="">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 px-2 py-4 rounded-md pr-40"
          />
          <button className="bg-black text-white ite px-4 py-4 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
