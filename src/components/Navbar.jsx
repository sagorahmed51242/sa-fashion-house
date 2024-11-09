import { IoSearchOutline } from 'react-icons/io5'
import logo from './../assets/images/logo-removebg-preview.png'
import { FiShoppingCart } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContextAPI } from '../utilities'


const Navbar = () => {
  const navigate = useNavigate();
  const {cartCount} = useContext(myContextAPI);

  const [searchText, setSearchText] = useState("");



  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      setSearchText("");
      navigate(`/products/${searchText}`);
    }else{
      alert("Please Prove value");
    }
  }
  return (
    <div className="bg-[#353535f7] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-10 md:gap-5 pb-5 lg:pb-0 flex gap-2 lg:gap-0 flex-col lg:flex-row items-center justify-between">
        <div onClick={()=>navigate('/')}>
          <img className='md:max-w-[350px]' src={logo} alt="this is the logo of the website" />
        </div>
        <div>
          <form onSubmit={handleSubmit} className='flex'>
            <input type="search" onChange={handleSearchText} placeholder='Search Your Desire Products' value={searchText} className='pl-6 py-2 md:w-[500px] text-gray-600 focus:outline-none text-lg font-semibold rounded-l-full' />
            <button className='px-3 -ml-7 bg-white rounded-r-full' type='submit'><IoSearchOutline className='text-2xl font-bold text-green-400' /></button>
          </form>
        </div>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <div><FaRegUserCircle className='text-gray-300 text-2xl' /></div>
            <div className='text-lg font-semibold text-gray-300'>Hello, Sign In</div>
          </div>
          <div onClick={()=>navigate("/cart")} className='cursor-pointer relative'>
            <FiShoppingCart className='text-gray-200 text-2xl' />
            {cartCount > 0 && <p className='bg-white absolute px-2.5 py-0.5 rounded-full -top-6 left-3'>{cartCount}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar