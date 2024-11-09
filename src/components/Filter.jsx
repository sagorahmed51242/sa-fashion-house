
const Filter = () => {
  return (
    <>
    <div className="bg-white rounded-xl shadow-md">
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <h1 className="text-xl font-bold">Sort</h1>
            <button className="text-blue-700">Reset Sort</button>
        </div>
        <hr />
        <div className="px-5 pb-5">
              <ul className="space-y-1 pt-2">
                  <li className="flex items-center">
                      <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-1"></span>
                      <span className="px-2 py-1 text-gray-800">Best Seller</span>
                  </li>
                  <li className="flex items-center">
                      <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-1"></span>
                      <span className="px-2 py-1 text-gray-800">New Released</span>
                  </li>
                  <li className="flex items-center">
                      <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-1"></span>
                      <span className="px-2 py-1 text-gray-800">Price - Low to High</span>
                  </li>
                  <li className="flex items-center">
                      <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-1"></span>
                      <span className="px-2 py-1 text-gray-800">Price - High to Low</span>
                  </li>
              </ul>
        </div>
    </div>
    <div className="bg-white rounded-xl mt-7 shadow-md">
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
            <h1 className="text-xl font-bold">Filter</h1>
            <button className="text-blue-700">Reset Filter</button>
        </div>
        <hr />
        <div className="px-5 pb-5">
              <ul className="space-y-1 pt-2">
                  <li className="flex items-center">
                      <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-1"></span>
                      <span className="px-2 py-1 text-gray-800">Sort By Letter - A to Z</span>
                  </li>
                  <li className="flex items-center">
                      <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-1"></span>
                      <span className="px-2 py-1 text-gray-800">Sort By Rating - High to Low</span>
                  </li>
                  <li className="flex items-center">
                      <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-1"></span>
                      <span className="px-2 py-1 text-gray-800">Discount - High to Low</span>
                  </li>
                  <li className="flex items-center">
                      <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-1"></span>
                      <span className="px-2 py-1 text-gray-800">Discount - Low to High</span>
                  </li>
              </ul>
        </div>
    </div>
    <div>
        <ul className="bg-white p-5 rounded-xl mt-5 shadow-md">
            <li className="flex items-center">
                <span className="w-4 h-4 border-2 border-gray-500 mr-1"></span>
                <span className="px-2 py-1 text-gray-900">In Stock</span>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Filter