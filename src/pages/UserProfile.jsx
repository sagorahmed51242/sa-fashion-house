import { useContext } from "react"
import { myContextAPI } from "../utilities"

const UserProfile = () => {


  const {user} = useContext(myContextAPI);

  return (
    <div className="max-w-[1280px] mx-auto my-10 flex justify-evenly items-center ">
      <p><span className="font-bold">User Email:</span> {user?.email}</p>
    </div>
  )
}

export default UserProfile