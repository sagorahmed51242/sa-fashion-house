import { useContext, useState } from "react";
import { myContextAPI } from "../utilities";

const Register = () => {

    const { setLogIn , signUp } = useContext(myContextAPI);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogIn = async (e) => {
        e.preventDefault();
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
                          <span className="label-text">First Name:</span>
                      </label>
                      <input type="name" placeholder="first name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Last Name:</span>
                      </label>
                      <input type="name" placeholder="last name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Phone Number</span>
                      </label>
                      <input type="number" placeholder="Enter phone number" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input onChange={(e)=>setEmail(e.target.value)} name="email" value={email} type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Password</span>
                      </label>
                      <input onChange={(e)=>setPassword(e.target.value)} name="password" value={password} type="password" placeholder="password" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Re-Password</span>
                      </label>
                      <input type="password" placeholder="password" className="input input-bordered" required />
                  </div>
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