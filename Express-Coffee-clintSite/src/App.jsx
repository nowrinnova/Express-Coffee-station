import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCart from './CoffeeCart'
import { useState } from 'react'


function App() {
  const data= useLoaderData()
  const [coffees,setCoffees]=useState(data)

  return (
    <>
    <h1 className='text-center text-xl font-bold py-5'>Hot coffee Station</h1>
      <div className='md:grid grid-cols-2 gap-5 px-6'>{
        coffees.map(data=><CoffeeCart coffees={coffees} setCoffees={setCoffees}  data={data} key={data._id}></CoffeeCart>)
      }</div>
    </>
  )
}

export default App
