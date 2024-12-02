import React from "react";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function CoffeeCart({ data  ,coffees ,setCoffees}) {
  const { _id, name, quantity, supplier, test, category, photo } = data;
  const navigate=useNavigate()

  const handleUpdate=(id)=>{
    navigate(`/updateCoffee/${id}`)
  }

  const handleDelete = (_id) => {
    console.log("deleted", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:"DELETE"
        })
          .then((res) => res.json())
          .then((data) =>{if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success",
            });
            const remaining=coffees.filter(cof=>cof._id!==_id)
            console.log(remaining)
            setCoffees(remaining)
          }});
        
      }
    });
  };
  
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-[200px] h-[200px]" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full px-4">
        <div>
          <h2 className="card-title">Name:{name}</h2>
          <p className="text-start">{category}</p>
          <p className="text-start">{test}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <button className="btn join-item">
              <FaEye />
            </button>
            <button onClick={()=>handleUpdate(_id)} className="btn join-item">
              <FaPencilAlt />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-500"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
