import { useContext, useState } from "react";
import { myContextAPI } from "../utilities";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const { setLogIn, logIn, logInWithGoogle } = useContext(myContextAPI);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleLogIn =() =>{
        logInWithGoogle();
        navigate("/profile")
    }
    const handleLogIn =async (e) => {
        e.preventDefault();
        try {
            await logIn(email,password);
            alert("logIn successfull");
            navigate('/profile')
        } catch (error) {
            console.log(error.message)
        }

    }
  return (
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center my-36">
          <h1 className="text-4xl font-bold text-[#412ddc] pb-12">LogIn Now</h1>
          <div>
            <h1 className="text-xl font-bold text-purple-600 text-center">LogIn with:</h1>
            <div className="flex gap-2 pt-2 pb-10">
                  <button onClick={handleGoogleLogIn} className="border px-3 py-2 rounded-lg hover:border-purple-600  flex items-center gap-2"> <FcGoogle />Google</button>
                  <button className="border px-3 py-2 rounded-lg hover:border-purple-600  flex items-center gap-2"><FaGithub />GitHub</button>
                  <button className="border px-3 py-2 rounded-lg hover:border-purple-600  flex items-center gap-2"><FaFacebook />Facebok</button>
                  <button className="border px-3 py-2 rounded-lg hover:border-purple-600  flex items-center gap-2"><FaSquareXTwitter />Twitter</button>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogIn} className="card-body pb-3">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input onChange={(e)=>setEmail(e.target.value)} name="emial" value={email} type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Password</span>
                      </label>
                      <input onChange={(e)=>setPassword(e.target.value)} name="passoword" value={password} type="password" placeholder="password" className="input input-bordered" required />
                      <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                  </div>
                  <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                  </div>
              </form>
              <div className="pb-7 text-center"><p>Don&apos;t have an account? <span className="cursor-pointer text-blue-800" onClick={() => setLogIn(false)}>Register</span></p></div>
          </div>
      </div>
  )
}

export default SignIn