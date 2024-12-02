import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './AddCoffee.jsx';
import UpdateCoffee from './UpdateCoffee.jsx';
import SignIn from './SignIn.jsx';
// import SignOut from './SignOut.jsx';
import AuthProvider from './Provider/AuthPRovider.jsx';
import SignUp from './SignUp.jsx';
import User from './User.jsx';
import UpdateUser from './UpdateUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
      path: "signIn",
      element: <SignIn></SignIn>,
    },
  {
      path: "signUp",
      element: <SignUp></SignUp>,
    },
  {
      path: "users",
      element: <User></User>,
      loader:()=>fetch('http://localhost:5000/users')
    },
  {
      path: "updateUsers/:id",
      element: <UpdateUser></UpdateUser>,
      loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
    },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
