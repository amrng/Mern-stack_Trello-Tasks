
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDelayedTasks, isLoading } from '../../Redux/taskaSlice'
import { useNavigate } from 'react-router-dom'



export default function AllTasks() {
  let delayedTasks = useSelector(state => state.Tasks) 
  let dispatch = useDispatch()
  let navigate = useNavigate()
   
   useEffect(()=>{
    dispatch(isLoading())
    dispatch(getDelayedTasks())
  }, [dispatch])

  function details(id){
    return navigate(`/tasks/update/${id}`)
  }
  return (
    <div>
      <div className="row justify-content-evenly ">
        {delayedTasks?.delayed?.length === 0 ? <h1 className='text-center mb-4'>You have no delayed tasks 🎉🎉</h1>  : ""}
        {delayedTasks?.tasks?.length === 0 && delayedTasks.loading === true ? <div className='w-100 h-100 d-flex mt-5 pt-5'><i className="fa-solid mx-auto fa-spinner fa-spin-pulse fa-2xl load mt-5 "></i></div>  : ""}

        
        {delayedTasks?.delayed?.map(task =>
        <div key={task._id} className="col-md-5 bg-info bg-gradient bg-opacity-10 rounded-5 position-relative mb-4 p-3">
          <h3 className='text-center mb-3 text-color'>{task.title}</h3>
          <div className='d-flex justify-content-between mb-3'>
            <h6 className='d-inline-block text-color fs-5 me-3'>Assigned to: <span className='fw-normal text-white fs-6 '>{task.userId.userName}</span></h6>
            <h6 className='d-inline-block text-color fs-5 me-3'>Status: <span className='fw-normal text-danger fs-6 '>Delayed</span></h6>
          </div>
            <h6 className='d-inline-block text-color fs-5 mb-3  me-3'>Description: <span className='fw-normal text-white fs-6 '>{task.description}</span></h6>
            {task.deadline? 
            <h6 className='text-color fs-5 mb-4  me-3'>Deadline: <span className='fw-normal text-white fs-6 '>{task.deadline}</span></h6>
            : ""}
            <button onClick={()=> details(task._id)} className='btn btn-outline-info mx-auto py-1 d-block'>Update</button>
        </div>)}
      </div>
    </div>
  )
}

// <div className='w-100 h-100 d-flex mt-5 pt-5'><i class="fa-solid mx-auto fa-spinner fa-spin-pulse fa-2xl load mt-5 "></i></div>