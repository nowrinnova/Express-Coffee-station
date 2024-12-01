import React from 'react'
import Swal from "sweetalert2";
import { useLoaderData } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function UpdateCoffee() {
  const data=useLoaderData()
  const { _id, name, quantity, supplier, test, category, photo ,details } = data;
  console.log(data)
  const handleAdd=(event)=>{
    event.preventDefault()
    const form=event.target;
    const name= event.target.name.value;
    const quantity=event.target.quantity.value;
    const supplier=event.target.supplier.value;
    const test=event.target.test.value;
    const category=event.target.category.value;
    const photo=event.target.photo.value;
    const updateCoffee={name, quantity,supplier,test,category,photo}
    console.log(updateCoffee)
    fetch(`http://localhost:5000/coffee/${_id}`,{
      method: "PUT",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(updateCoffee),
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount>0){
        Swal.fire({
          title: "success",
          text: "Coffee is updated in the dataBase",
          icon: "success"
        });
      }
      form.reset()
      console.log(data)
    })
  }
  return (
    <div>
      <h1 className='text-center text-xl font-bold'>Update coffee : <span className='text-red-500'>{name}</span></h1>
      <form onSubmit={handleAdd}>
        <div className="md:flex gap-10 py-5">
          <div className="w-full md:w-1/2 ">
            <h1 className="text-start font-bold mb-2">Coffee name</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="Coffee name"
                name="name"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-start font-bold mb-2">Available Quantity</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="Quantity"
                name="quantity"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10 py-5">
          <div className="w-full md:w-1/2">
            <h1 className="text-start font-bold mb-2">Supplier name</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="Supplier name"
                name="supplier"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-start font-bold mb-2">Test</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="Test"
                name="test"
                defaultValue={test}
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10 py-5">
          <div className="w-full md:w-1/2">
            <h1 className="text-start font-bold mb-2">Category</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="Category"
                name="category"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-start font-bold mb-2">Details</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="Details"
                name="details"
                defaultValue={details}
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10 py-5">
          <div className="w-full md:w-1/2">
            <h1 className="text-start font-bold mb-2">Photo URL</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="Photo URl"
                name="photo"
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10 py-5">
          <div className="w-full">
            <input
              className=" btn btn-block bg-[#8f7c7c]"
              type="submit"
              value=" Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
