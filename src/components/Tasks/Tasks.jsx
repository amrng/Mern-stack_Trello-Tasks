
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from "./Tasks.css"
import { Link, Outlet } from 'react-router-dom'

export default function Tasks() {


    
  return (
    <div className="container m-5 pt-5">
      <div className="row justify-content-center ">
        <div className="col-md-2 p-0  me-4 rounded-5 d-flex flex-column align-items-center justify-content-center">
          <Link to={"add"} className="order bg-info bg-opacity-10 px-4 py-5 rounded-top-5 w-100">
            <h5 className='mb-0'><i class="fa-regular fa-square-plus fa-lg me-3"></i>Add Task</h5>
            
          </Link>

          <Link to={"all"} className="order bg-info bg-opacity-10 px-4 py-5 w-100 my-2">
            <h5 className='mb-0'><i class="fa-solid fa-border-all me-3 fa-lg"></i>All Tasks</h5>
          </Link>

          <Link to={"update"} className="order bg-info bg-opacity-10 px-4 py-5 w-100 mb-2">
            <h5 className='mb-0'><i class="fa-regular fa-pen-to-square me-3 fa-lg"></i>Update Task</h5>
          </Link>

          <Link to={"delayed"} className="order bg-info bg-opacity-10 px-4 py-5 rounded-bottom-5 w-100">
            <h5 className='mb-0'><i class="fa-regular fa-clock me-3 fa-lg"></i>Delayed Tasks</h5>
          </Link>
        </div>

        <div className="col-md-9 bg-danger p-4  bg-opacity-10 rounded-5">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
