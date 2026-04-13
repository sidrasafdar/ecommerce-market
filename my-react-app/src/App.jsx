import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home  from './assets/components/Home'
import Shop from './assets/components/Shop'
import Login from './assets/components/login'
import Register from './assets/components/register'
import Header from './assets/components/Header'
import { BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Blog from './assets/components/Blog'
import { Link } from "react-router-dom";
import Layout from './assets/components/Layout'
import Sproduct from "./assets/components/Sproduct"
// import { Scripts } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout />,
    children: [
          
    {
      index:true,
      element: <Home />
    },
    {
      path:"blog",
      element: <Blog />
    },
      {
      path:"shop",
      element: <Shop />
    },
      {
      path:"login",
      element: <Login />
    },
      {
      path:"register",
      element: <Register />
    },
    {
      path:"product",
      element: <Sproduct />
    }
  ]
}  
  ]);
  return <RouterProvider router={router}/>;

}

export default App;
