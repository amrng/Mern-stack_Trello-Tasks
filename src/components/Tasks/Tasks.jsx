import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import './Tasks.css'

export default function Tasks() {
  
  let decode = jwtDecode(localStorage.getItem("token"))
    
  return (
    <div className="my-5 pt-5 overflow-x-hidden">
      <div className="row justify-content-center align-items-start ">

        <div className="col-md-2 p-0 rounded-5 d-flex flex-column align-items-center justify-content-center">
          <Link to={`add/${decode.id}`} className="order bg-info bg-opacity-10 px-4 py-5 rounded-top-5 w-100">
            <h5 className='mb-0'><i className="fa-regular fa-square-plus fa-lg me-3"></i>Add Task</h5>
            
          </Link>

          <Link to={"all"} className="order bg-info bg-opacity-10 px-4 py-5 w-100 my-2">
            <h5 className='mb-0'><i className="fa-solid fa-border-all me-3 fa-lg"></i>All Tasks</h5>
          </Link>

          <Link to={"delayed"} className="order bg-info bg-opacity-10 px-4 py-5 rounded-bottom-5 w-100">
            <h5 className='mb-0'><i className="fa-regular fa-clock me-3 fa-lg"></i>Delayed Tasks</h5>
          </Link>
        </div>

        <div className="col-md-8 p-0 mx-3">
          <Outlet/>
        </div>

      </div>
    </div>
  )
}
