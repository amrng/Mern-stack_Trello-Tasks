import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Tasks from './components/Tasks/Tasks'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import { Provider } from 'react-redux'
import { store } from './components/Redux/Store'
import AddTask from './components/Tasks/AddTask/AddTask'
import AllTasks from './components/Tasks/AllTasks/AllTasks'
import UpdateTask from './components/Tasks/UpdateTask/UpdateTask'
import DelayedTasks from './components/Tasks/DelayedTasks/DelayedTasks'




export default function App() {


const routers = createBrowserRouter([
  {path:"", element: <Layout/>, children: [
    {index: true, element: <LandingPage/>},
    {path: "login", element: <Login/>},
    {path: "register", element: <Register/>},
    {path: "tasks", element: <Tasks/>, children: [
      {path: "add/:id", element: <AddTask/>},
      {index: "true", element: <AllTasks/>},
      {path: "update/:id", element: <UpdateTask/>},
      {path: "delayed", element: <DelayedTasks/>},
    ]},
    {path: "profile", element: <Profile/>},
    {path: "*", element: <NotFound/>}
  ]}
])








  return (
    <Provider store={store}>
    <RouterProvider router={routers}>
      <Layout/>

    </RouterProvider>
    </Provider>


  )
}



