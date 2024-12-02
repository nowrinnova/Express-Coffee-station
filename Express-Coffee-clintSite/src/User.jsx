import React, { useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
export default function User() {
  const data=useLoaderData()
  const[users,setUsers]=useState(data)
  console.log(data)
  const navigate=useNavigate()
  const handleDelete=(id)=>{
    console.log(id)

    fetch(`http://localhost:5000/users/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{if (data.deletedCount > 0) {
      Swal.fire({
        title: "Deleted!",
        text: "Your Coffee has been deleted.",
        icon: "success",
      });
      const remaining=users.filter(user=>user._id!==id)
      console.log(remaining)
      setUsers(remaining)
    }});
  
  }
  const handleEdit=(id)=>{
    navigate(`/updateUsers/${id}`);
  }

  return (
    <div>
      <ul className='flex justify-center items-center gap-4'>
      <li className='btn p-4 mx-2'><Link to={'/'}>Home</Link></li>
      <li className='btn p-4 mx-2'><Link to={'/addCoffee'}>Add Coffee</Link></li>
      <li className='btn p-4 mx-2'><Link to={'/signIn'}>SignIn</Link></li>
      <li className='btn p-4 mx-2'><Link to={'/signUp'}>SignUp</Link></li>
      <li className='btn p-4 mx-2'><Link to={'/users'}>Users</Link></li>
      {/* <li className='btn p-4 mx-2'></li> */}
    </ul>
      <h1 className='text-2xl text-center font-bold pb-8'>Users</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
        {/* <th>Action</th> */}
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=><><tr key={index} >
          <th>1</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td className='btn p-4'><button onClick={()=>handleEdit(user._id)}>Edit</button></td>
          <td className='btn ml-4 p-4'><button onClick={()=>handleDelete(user._id)}>X</button></td>
        </tr></>)
      }
      
      {/* row 2 */}
      {/* <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr> */}
      {/* row 3 */}
      {/* <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
    </tbody>
  </table>
</div>
    </div>
  )
}
