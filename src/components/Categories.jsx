/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Categories = ({category}) => {
    const navigate = useNavigate();

    const [categorProduct, setCategorProduct] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res=> res.json())
        .then(data=> setCategorProduct(data.products.slice(0,4)))
    },[category])

  return (
    <div>
        <div onClick={()=> navigate(`/product/${category}`)} className="bg-white px-2 py-4 ">
            <h1 className="text-xl font-bold ml-5">{category.toUpperCase()}</h1>
            <div className="grid grid-cols-2 gap-5 p-5">
                {categorProduct && categorProduct.map((product,index)=> (<div className="flex flex-col gap-2 cursor-pointer" key={index}>
                    <img className=" object-contain border bg-gray-200" src={product.thumbnail} alt="this is the thumbnail" />
                    <p className="text-sm">{product.title.substr(0,12)}</p>
                </div>))}
            </div>
            <p className="ml-5 text-sm hover:text-blue-800 hover:underline cursor-pointer">See More</p>
        </div>
    </div>
  )
}

export default Categories