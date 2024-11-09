/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import StarRating from "./../utilities/StarRating"
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { myContextAPI } from "../utilities";

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false);

  const { setCartItemIntoLocatStorage } = useContext(myContextAPI);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error: ", error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = (item) => {
    setCartItemIntoLocatStorage(item);
  }


  const { images, tags, title, weight,brand, warrantyInformation, shippingInformation, price, rating, availabilityStatus, category, description, discountPercentage, returnPolicy, dimensions } = product;
  return (
    <div className="w-full h-full bg-gray-200 py-10">
      <div className="max-w-[1280px] mx-auto bg-white p-5 rounded-xl grid grid-cols-12 gap-6">
        <div className=" h-[400px] border border-green-400 rounded-lg col-span-4"><img className="w-full  h-full object-cover p-1" src={images} alt="" /></div>
        <div className="col-span-8">
          <div className="space-y-2 pb-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-600 italic">{description}</p>
            <p className="flex items-center font-semibold gap-2">Rating:<StarRating  rating={Math.floor(product.rating)} /> {rating}</p>
            <p className="border rounded-full px-3 py-1 inline-block border-green-500 text-green-400">{availabilityStatus}</p>
            <p className="text-xl font-bold">Price: $ {price}</p>
          </div>
          <hr />
          <div className="space-y-1.5 grid grid-cols-2 pt-5">
            <p><span className="font-semibold">Warranty Information:</span>  {warrantyInformation ? warrantyInformation:'N/A'}</p>
            <p><span className="font-semibold"> Shipping Information:</span> {shippingInformation ? shippingInformation:'N/A'}</p>
            <p><span className="font-semibold">Return Policy :</span> {returnPolicy ? returnPolicy:'N/A'}</p>
            <p><span className="font-semibold">Category:</span>  {category ? category:'N/A'}</p>
            <p> <span className="font-semibold"> Brand: </span>{brand?brand:'N/A'}</p>
            <p><span className="font-semibold">Weight:</span> {weight ? weight:'N/A'}</p>
            <p><span className="font-semibold">Width: </span> {dimensions?.width}</p>
            <p><span className="font-semibold">Height: </span> {dimensions?.height}</p>
            <p><span className="font-semibold">Depth: </span> {dimensions?.depth}</p>
            <p><span className="font-semibold"> Discout Percentage:</span> {discountPercentage ? discountPercentage:'N/A'}%</p>
            <p><span className="font-semibold">Tags: #</span> {tags ? tags:'N/A'}</p>

          </div>

          <div className="flex items-center gap-10 pt-5">
            <button onClick={()=>handleAddToCart(product)} className="flex items-center gap-2 border px-3 py-2 border-green-400 rounded-lg text-lg font-bold bg-green-200 hover:bg-green-500 hover:text-white"><FiShoppingCart/> Add to Cart</button>
            <button className="flex items-center gap-2  px-3 py-2 text-lg"><FiHeart className="text-xl"/> Add to Booklist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails