// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CART, DELETE_CART } from "./CartSlice";
import { useNavigate } from "react-router-dom";

// import { useEffect } from "react";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.listCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(UPDATE_CART({ id, quantity }));
  };

  const handleDelete = (id) => {
    dispatch(DELETE_CART(id));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className="container mx-auto py-5"
      style={{ maxWidth: "1080px", margin: "0 auto", minHeight: "68vh" }}
    >
      <div className="bg-gray-100 p-20 rounded-lg shadow-md mb-6 flex justify-between ">
        <h1 className="text-3xl font-bold text-center mb-6 ">Cart</h1>
        <h3 className="text-xl font-bold text-gray-400 text-center mb-6 ">
          Cart
        </h3>
      </div>
      <h1 className="text-2xl font-bold mb-4 pt-5">SHOPPING CART</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex justify-between ">
          <div>
            <table className="w-full border-collapse ">
              <thead>
                <tr className="">
                  <th className=" p-2">Image</th>
                  <th className=" p-2 w-60">Product</th>
                  <th className=" p-2">Price</th>
                  <th className=" p-2">Quantity</th>
                  <th className=" p-2">Total</th>
                  <th className=" p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="p-2">
                      <img className="w-20" src={item.img1} />
                    </td>
                    <td className=" p-2">{item.name}</td>
                    <td className=" p-2">${item.price}</td>
                    <td className=" p-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item._id.$oid,
                            Number(e.target.value)
                          )
                        }
                        className="w-16 text-center rounded"
                      />
                    </td>
                    <td className=" p-2">${item.price * item.quantity}</td>
                    <td className=" p-2">
                      <button
                        onClick={() => handleDelete(item._id.$oid)}
                        // className="text-red-500"s
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between mt-5 bg-gray-100 py-5 px-2">
              <button onClick={() => navigate("/shop")} className="px-4 py-2">
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="border  px-4 py-2"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <div className="w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <h2 className="text-3xl p-5">CART TOTAL</h2>
            <div className="flex justify-between mt-4 py-2 border-b-2">
              <span className="">SUBTOTAL</span>
              <p className="text-gray-500">
                {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                VND
              </p>
            </div>
            <div className="flex justify-between mt-4 py-2 pb-10">
              <span className="">TOTAL</span>
              <p className="text-xl">
                {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                VND
              </p>
            </div>
            <input
              placeholder="Enter your coupon"
              className="border border-gray-300 p-2 w-full "
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md ml-2 w-full">
              <i className="fa-solid fa-gift"></i> Apply Coupon
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
