import Swal from 'sweetalert2'
export default function AddCoffee() {
  const handleAdd=(event)=>{
    event.preventDefault()
    const form=event.target;
    const name= event.target.name.value;
    const quantity=event.target.quantity.value;
    const supplier=event.target.supplier.value;
    const test=event.target.test.value;
    const category=event.target.category.value;
    const photo=event.target.photo.value;
    const newCoffee={name, quantity,supplier,test,category,photo}
    console.log(newCoffee)
    fetch('http://localhost:5000/coffee',{
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(newCoffee),
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: "success",
          text: "Coffee is added in the dataBase",
          icon: "success"
        });
      }
      form.reset()
      console.log(data)
    })
  }
  return (
    <div className="max-w-6xl mx-auto bg-[#F4F3F0] p-10">
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
  );
}
