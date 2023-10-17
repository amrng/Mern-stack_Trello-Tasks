
import React, { useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import style from "./AllTasks.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../../Redux/taskaSlice'
import { useNavigate } from 'react-router-dom'



export default function AllTasks() {
  let allTasks = useSelector(state => state.Tasks) 
  let dispatch = useDispatch()
  let navigate = useNavigate()
   
   useEffect(()=>{
    dispatch(getAllTasks())
  }, [allTasks, dispatch])

  function details(id){
    return navigate(`/tasks/update/${id}`)
  }
  return (
    <div>
      <div className="row justify-content-evenly ">
        {allTasks?.getAllTasks?.length === 0 ? <h1>You have no tasks 💃🏽💃🏽</h1>  : ""}
        
        {allTasks?.getAllTasks?.map(task =>
        <div key={task._id} className="col-md-5 bg-info bg-gradient bg-opacity-10 rounded-5 position-relative mb-4 p-3">
          <h3 className='text-center mb-3 text-color'>{task.title}</h3>
          <div className='d-flex justify-content-between mb-3'>
            <h6 className='d-inline-block text-color fs-5 me-3'>Assigned to: <span className='fw-normal text-white fs-6 '>{task.userId.userName}</span></h6>
            <h6 className='d-inline-block text-color fs-5 me-3'>Status: <span className='fw-normal text-white fs-6 '>{task.status}</span></h6>
          </div>
            <h6 className='d-inline-block text-color fs-5 mb-4  me-3'>Description: <span className='fw-normal text-white fs-6 '>{task.description}</span></h6>
            <button onClick={()=> details(task._id)} className='btn btn-outline-info mx-auto py-1 d-block'>Update</button>
        </div>)}
      </div>
    </div>
  )
}

// <div className='w-100 h-100 d-flex mt-5 pt-5'><i class="fa-solid mx-auto fa-spinner fa-spin-pulse fa-2xl load mt-5 "></i></div>