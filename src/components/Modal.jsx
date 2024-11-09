/* eslint-disable react/prop-types */
import { PiSealCheckFill } from "react-icons/pi"

const Modal = ({ price, closePurchase }) => {
    return (
        <div className="z-50 fixed w-full h-full top-0 left-0 bg-[#808080c4] flex justify-center items-center">
            <div className="w-auto px-10 rounded-xl py-4 h-auto text-center bg-white">
                <p><PiSealCheckFill className='inline-block text-7xl text-green-500 my-2' /></p>
                <h1 className="text-2xl font-bold py-3">Payment Successfully</h1>
                <hr />
                <h2 className=" py-1 font-semibold text-[#09080F99] pt-4">Thanks for purchasing.</h2>
                <h2 className=" font-semibold text-[#09080F99]">Total: $ {price}</h2>
                <button onClick={() => closePurchase(false)} className="border w-full text-lg font-bold p-2 rounded-full bg-gray-200 my-4">Close</button>
            </div>
        </div>
    )
}

export default Modal