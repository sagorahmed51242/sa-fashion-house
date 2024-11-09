import logo from './../assets/images/logo-removebg-preview.png'
const Footer = () => {
  return (
    <div className="bg-[#353535f7]">
    <div className="py-10 md:py-24 max-w-[1280px]  mx-auto">
      <div className="text-center pb-5">
        <img src={logo} className="block mx-auto w-[350px] md:w-[450px]" alt="" />
      </div>
      <hr />
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-evenly py-5">
        <ul className="flex flex-col items-center gap-1 text-[#acacac]">
          <li className="text-lg font-bold pb-2 text-white">Services</li>
          <li>Product Support</li>
          <li>Order Tracking</li>
          <li>Shipping & Delivery</li>
          <li>Returns</li>
        </ul>
          <ul className="flex flex-col items-center gap-1 text-[#acacac]">
          <li className="text-lg font-bold pb-2 text-white">Company</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
          <ul className="flex flex-col items-center gap-1 text-[#acacac]">
          <li className="text-lg font-bold pb-2 text-white">Legal</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer