import { useContext } from "react"
import Register from "../components/Register"
import SignIn from "../components/SignIn"
import { myContextAPI } from "../utilities"

const UserSingInOrResisterPage = () => {
const {isLogIn} = useContext(myContextAPI);

  return (
    <div>
      {isLogIn? <SignIn/>: <Register/>}
    </div>
  )
}

export default UserSingInOrResisterPage