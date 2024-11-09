import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import Product from './../components/Product'
import Filter from './../components/Filter'
import { sortByPriceHightToLow, sortByPriceLowToHigh } from "../utilities/Filter";

const Products = () => {
  const {category} = useParams();




  const location = useLocation();


  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

const url = location.pathname === `/product/${category}` ? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products/search?q=${category}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
    .then(res=> res.json())
    .then(data => {
      setProducts(data.products)
      setIsLoading(false);
    });
  },[category, url])

  const handleSortByPrice = (condition) => {
    if(condition === "lth"){
      const sortedArr = sortByPriceLowToHigh(products);
      setProducts(sortedArr);
    }else{
      const sortedArr = sortByPriceHightToLow(products);
      setProducts(sortedArr);
    }
  }


  return (
  <>
      {
        isLoading ? <div className="border border-red-400 w-[100%] h-screen fixed top-0 bg-white z-50 flex justify-center items-center "><span className="loading loading-bars w-16 h-36"></span></div> : <div className="bg-gray-200 w-full h-full py-16">
          <div className="max-w-[1280px] h-auto mx-auto bg-gray-200 grid grid-cols-4 justify-between gap-5">
            <div className="col-span-1">
              <Filter handleSortByPrice={handleSortByPrice} />
            </div>
            <div className="grid grid-cols-3 gap-5 col-span-3">
              {
                products && products.map((product, index) => (<Product key={index} product={product} />))
              }
            </div>
          </div>
        </div>
      }
  </>
  )
}

export default Products