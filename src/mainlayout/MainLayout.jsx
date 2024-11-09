import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import { ContextProvier } from "../utilities"

const MainLayout = () => {
  return (
    <>
      <ContextProvier>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </ContextProvier>
    </>
  )
}

export default MainLayout