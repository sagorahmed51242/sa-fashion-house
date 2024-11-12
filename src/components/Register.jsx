import { useContext, useState } from "react";
import { myContextAPI } from "../utilities";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {

    const { setLogIn , signUp } = useContext(myContextAPI);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [error, setError] = useState("");
    const [isShow, setShow] = useState(false);


    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const handleLogIn = async (e) => {
        e.preventDefault();

        if (!passwordRegex.test(password)) {
            return setError("Password must be at least 6 characters long. include a letter, a number, and a special character.")
        }else if(password !== rePassword){
            return setError("Password doesn't match!");
        }else{
            setError("")
        }

        try {
            await signUp(email, password);
            alert("Registation Successfull");
            setLogIn(true);
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center my-36">
        <h1 className="text-4xl font-bold text-[#412ddc] pb-12">Register Now</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogIn} className="card-body pb-5">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input onChange={(e)=>setEmail(e.target.value)} name="email" value={email} type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control relative">
                      <label className="label">
                          <span className="label-text">Password</span>
                      </label>
                      <input onChange={(e) => setPassword(e.target.value)} name="password" value={password} type={isShow?'text':'password'} placeholder="password" className="input input-bordered" required />
                      <p onClick={()=>setShow(!isShow)} className="absolute top-12 text-xl right-4 cursor-pointer">{isShow ? <FaRegEyeSlash /> :<FaRegEye /> }</p>
                  </div>
                  <div className="form-control relative">
                      <label className="label">
                          <span className="label-text">Re-Password</span>
                      </label>
                      <input onChange={(e)=> setRePassword(e.target.value)} name="repassword" value={rePassword} type={isShow?'text':'password'} placeholder="password" className="input input-bordered" required />
                      <p onClick={()=>setShow(!isShow)} className="absolute top-12 text-xl right-4 cursor-pointer">{isShow ? <FaRegEyeSlash /> : <FaRegEye />}</p>
                  </div>
                  {error.length > 1 && <span className="border p-2 border-red-400 bg-red-200 italic leading-6 mt-3">{error}</span>}
                  <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                  </div>
              </form>
              <div className="text-center pb-5">Already have an account? <span className="cursor-pointer text-blue-800" onClick={() => setLogIn(true)}>LogIn</span></div>
          </div>
        </div>
  )
}

export default Register