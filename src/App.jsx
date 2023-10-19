import React, { useContext, useEffect } from 'react';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Tasks from './components/Tasks/Tasks'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import AddTask from './components/Tasks/AddTask/AddTask'
import AllTasks from './components/Tasks/AllTasks/AllTasks'
import UpdateTask from './components/Tasks/UpdateTask/UpdateTask'
import DelayedTasks from './components/Tasks/DelayedTasks/DelayedTasks'
import { TokenContext } from './Context/token';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';


export default function App() {
  	let { setToken } = useContext(TokenContext);
	useEffect(() => {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
		}
	}, [setToken]);

const routers = createBrowserRouter([
  {path:"", element: <Layout/>, children: [
    {index: true, element: <LandingPage/>},
    {path: "login", element: <Login/>},
    {path: "register", element: <Register/>},
    {path: 'tasks', element: (<ProtectedRoutes> <Tasks /> </ProtectedRoutes>), children: [
      {path: "add/:id", element: <AddTask/>},
      {path: "all", element: <AllTasks/>},
      {path: "update/:id", element: <UpdateTask/>},
      {path: "delayed", element: <DelayedTasks/>},
    ]},
    {path: 'profile', element: ( <ProtectedRoutes> <Profile /></ProtectedRoutes>)},
    {path: "*", element: <NotFound/>}
  ]}
])

return (

    <RouterProvider router={routers}>
      <Layout/>
    </RouterProvider>

  )
}