import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Tasks from './components/Tasks/Tasks'
import NotFound from './components/NotFound/NotFound'



export default function App() {


const routers = createBrowserRouter([
  {path:"", element: <Layout/>, children: [
    {index: true, element: <LandingPage/>},
    {path: "login", element: <Login/>},
    {path: "register", element: <Register/>},
    {path: "tasks", element: <Tasks/>},
    {path: "*", element: <NotFound/>}
  ]}
])








  return (

    <RouterProvider router={routers}>
      <Layout/>

    </RouterProvider>











  )
}



