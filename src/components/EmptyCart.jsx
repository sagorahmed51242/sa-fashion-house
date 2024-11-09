import { TfiShoppingCartFull } from "react-icons/tfi"
import { Link } from "react-router-dom"

const EmptyCart = () => {
  return (
    <div className="text-center w-[1280px] mx-auto">
          <div className="flex justify-center">
              <TfiShoppingCartFull className="text-9xl" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Your Cart is Empty</h1>
              <h1>Looks like you haven&apos;t made order yet.</h1>
              <Link to={'/'} className="text-blue-500">Continue Shopping....</Link>
          </div>
    </div>
  )
}

export default EmptyCart