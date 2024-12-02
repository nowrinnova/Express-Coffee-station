import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthPRovider";
import Swal from "sweetalert2";
export default function SignUp() {
  const {createUser}=useContext(AuthContext)
 
  const handleSingUp=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const newUser={name,email}
    console.log(newUser)
    createUser(email,password)
    .then(result=>{
      fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newUser)
      })
      .then(res=>res.json())
      .then(data=>{
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User added in the database",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        console.log(data)
      })
      console.log(result.user)})
    .catch(error=>{console.log(error.message)})
  }

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
          <Link to={"/signUp"}>SignUp</Link>
        </li>
        <li><Link to={'/users'}>Users</Link></li>
      </ul>

      <div className="max-w-xl mx-auto py-10 ">
        <form className="space-y-4" onSubmit={handleSingUp}>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow" placeholder="Email" name="email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" name="name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" name="password" />
          </label>
          <input type="submit" value="Add" className="btn w-full bg-orange-200"/>
        </form>
      </div>
    </div>
  );
}
