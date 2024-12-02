import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCart from './CoffeeCart'
import { useState } from 'react'


function App() {
  const data= useLoaderData()
  const [coffees,setCoffees]=useState(data)

  return (
    <>
    <ul className='flex justify-center items-center gap-4'>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/addCoffee'}>Add Coffee</Link></li>
      <li><Link to={'/signIn'}>SignIn</Link></li>
      <li><Link to={'/signUp'}>SignUp</Link></li>
      <li><Link to={'/users'}>Users</Link></li>
      <li></li>
    </ul>
    <h1 className='text-center text-xl font-bold py-5'>Hot coffee Station</h1>
      <div className='md:grid grid-cols-2 gap-5 px-6'>{
        coffees.map(data=><CoffeeCart coffees={coffees} setCoffees={setCoffees}  data={data} key={data._id}></CoffeeCart>)
      }</div>
    </>
  )
}

export default App
