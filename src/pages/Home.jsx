import { useLoaderData } from "react-router-dom"
import Categories from "../components/Categories";
import Banner from './../components/Banner';
const Home = () => {
  const categories = useLoaderData();


  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="bg-gray-200 pb-24">
        <div className="max-w-[1280px] mx-auto relative -mt-56 z-30">
          <div className="grid grid-cols-4 gap-5">
            {categories && categories.map((category, index) => (<Categories key={index} category={category} />))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home