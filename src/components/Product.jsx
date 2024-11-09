/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
  const navigate = useNavigate();

  const {title,images,price,rating,id} = product;

  return (
    <div className="border shadow-md p-5 bg-white rounded-xl max-h-[440px]">
          <div><img src={images} alt="this is a product" /></div>
          <div>
            <p className="text-lg font-bold">{title}</p>
            <div className="flex items-center justify-between py-2">
                  <p>Price: $ {price}</p>
                  <p>Rating: {rating}</p>
            </div>
        <button onClick={() => navigate(`/product-details/${id}`)} className="border px-3 py-2 rounded-full bg-green-400 text-sm text-white hover:bg-green-700">View Details</button>
          </div>
    </div>
  )
}

export default Product