import { useContext, useEffect, useState } from "react";
import { myContextAPI } from "../utilities";
import { MdDelete } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaBoxOpen, FaCertificate, FaHandHoldingUsd, FaPercent, FaUndo } from "react-icons/fa";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";

const CartPage = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const { getICartItemFromLocalStorage, removeItemFromCart, clearCart } = useContext(myContextAPI);

  useEffect(() => {
    const cartItems = getICartItemFromLocalStorage().map(item => ({
      ...item,
      count: 1 // Initialize each product with a count of 1
    }));
    setCartProduct(cartItems);
  }, [getICartItemFromLocalStorage]);

  const handleDeleteProduct = (id) => {
    removeItemFromCart(id);
    setCartProduct(prevProducts => prevProducts.filter(item => item.id !== id));
  };

  const handleCountChange = (index, delta) => {
    setCartProduct(prevProducts =>
      prevProducts.map((item, i) =>
        i === index ? { ...item, count: Math.max(1, item.count + delta) } : item
      )
    );
  };


  const handleModaClose = (value) => {
    setShowModal(value);
    navigate("/");
    clearCart();
    setCartProduct([]);
  }
  // Calculate total price based on each item's price and count
  const totalPrice = cartProduct.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="w-full h-full bg-gray-200 py-10">
      {cartProduct <= 0 ? <EmptyCart /> :
      <div className="w-[1280px] mx-auto grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-white flex justify-between items-center py-3 px-5 font-bold text-2xl rounded-lg border border-green-400">
            <h1>Cart</h1>
            <p className="text-lg font-normal">Total Price: $ {totalPrice.toFixed(2)}</p>
          </div>
          <div>
            {cartProduct.map((item, index) => (
              <div className="bg-white my-5 rounded-lg border border-green-400 shadow-md" key={item.id}>
                <div className="flex items-center p-5 gap-5">
                  <div className="flex items-center w-3/4 gap-5">
                    <div className="flex items-center gap-5">
                      <div className="text-xl font-bold">{index + 1}</div>
                      <div><img className="w-[450px] border border-green-400 rounded-lg" src={item.images} alt="" /></div>
                    </div>
                    <div className="flex flex-col">
                      <div><h1 className="text-lg font-bold pb-2">{item.title}</h1></div>
                      <div><h1 className="text-sm text-gray-600 pb-5">{item.description.substring(0, 100)}</h1></div>
                      <div><button onClick={() => handleDeleteProduct(item.id)}><MdDelete className="text-red-600 text-2xl" /></button></div>
                    </div>
                  </div>
                  <div className="flex justify-around w-1/2">
                    <div className="flex border border-green-400 text-lg font-bold">
                      <button
                        className="bg-gray-200 px-3 py-0.5"
                        disabled={item.count <= 1}
                        onClick={() => handleCountChange(index, -1)}
                      >-</button>
                      <p className="bg-white px-3">{item.count}</p>
                      <button
                        className="bg-gray-200 px-3"
                        onClick={() => handleCountChange(index, 1)}
                      >+</button>
                    </div>
                    <div className="text-lg font-bold">${(item.price * item.count).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-white p-5 rounded-lg border border-green-400 shadow-md">
            <h1 className="text-lg font-bold pb-2">Checkout Summary</h1>
            <hr />
            <div className="space-y-2 pt-2 px-3">
              <p className="text-sm border-b border-dashed pb-1 flex justify-between"><span>Subtotal</span> <span>$ {Math.floor(totalPrice)}</span></p>
              <p className="text-sm border-b border-dashed pb-1 flex justify-between"><span>Shipping</span><span>${50}</span></p>
              <p className="text-sm border-b border-dashed pb-1 flex justify-between"><span>Total</span> <span>$ {Math.floor(totalPrice + 50)}</span></p>
              <p className="text-lg font-bold border-b border-dashed pb-1 flex justify-between"><span>Payable Total</span> <span>${Math.floor(totalPrice + 50)}</span></p>
            </div>
          </div>
          <div className="bg-blue-200 p-5 rounded-lg mt-5  flex flex-col justify-center items-center shadow-md">
            <button className=" py-2 px-24 border-purple-600 border-2 rounded-lg text-lg fong-bold text-purple-900 hover:bg-purple-700 hover:text-white  mt-5">Order as a Gift</button>
            <button onClick={()=>setShowModal(true)} className="flex items-center bg-blue-600 text-white text-lg  px-12 py-2 rounded-lg mt-5">Proceed to Checkout <IoIosArrowRoundForward className="text-white text-4xl" /></button>
            <p className="px-5 py-4 text-sm">Apply Promo Code or Voucher Code on the Shipping Page</p>
          </div>
          <div className="bg-white p-6 rounded-md mt-8 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <FaHandHoldingUsd className="text-xl" />
              <span>Cash on Delivery</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaUndo className="text-xl" />
              <span>7-Day Return Policy</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaPercent className="text-xl" />
              <span>100% Money-back Guarantee</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaBoxOpen className="text-xl" />
              <span>Order and Win Prizes</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaCertificate className="text-xl" />
              <span>100% Original Products</span>
            </div>
          </div>
        </div>
      </div>}

      {
      showModal && <Modal closePurchase={handleModaClose} price={Math.floor(totalPrice + 50)} />
      }
    </div>
  );
};

export default CartPage;
