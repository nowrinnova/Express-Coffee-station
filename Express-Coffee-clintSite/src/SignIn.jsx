import React, { useContext, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthPRovider";

export default function SignIn() {
  const { loginUser, logInGoogle, forgetPAssword } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef=useRef()
  return (
    <div>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/addCoffee"}>Add Coffee</Link>
        </li>
        <li>
          <Link to={"/signIn"}>SignIn</Link>
        </li>
        <li>
          <Link to={"/signOut"}>SignOut</Link>
        </li>
        <li></li>
      </ul>
      <div className="flex justify-center items-center my-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLoginForm}>
            <h1 className="font-semibold text-xl text-center font-poppins">
              Login your account
            </h1>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <button
                className="absolute right-2 top-[50px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button
                  onClick={handleForgetPassword}
                  href="#"
                  className="label-text-alt link link-hover mt-3"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-gray-600 text-white hover:text-black ">
                Login
              </button>
            </div>
          </form>
          <p className="text-xs text-center mb-5">
            Don't Have An Account ?{" "}
            <Link end to={"register"} className="text-red-400">
              Register
            </Link>{" "}
          </p>
          <div className="divider text-xs">OR</div>
          <p className="text-center">
            <button onClick={handleGoogle}>
              {" "}
              <img
                className="h-10 w-10  mb-2"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
              />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
