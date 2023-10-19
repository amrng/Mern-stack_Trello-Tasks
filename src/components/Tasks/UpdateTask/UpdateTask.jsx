import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, getAllTasks, updateTask } from '../../Redux/taskaSlice'
import { useNavigate, useParams } from 'react-router-dom'


export default function UpdateTask() {

  let selectedTask = useParams()
  let dispatch = useDispatch()
  let allTasks = useSelector(state => state.Tasks)
  let navigate = useNavigate()


  function removeTask(paramID){
    dispatch(deleteTask(paramID))
    navigate("/tasks/all")
  }


  useEffect(()=> {
    dispatch(getAllTasks())
  }, [dispatch])


  let validationSchema = Yup.object({
    title: Yup.string().required("Title is required !"),
    description: Yup.string().required("Description of task ?"),
    assignTo: Yup.string().required("Who will done this job ?"),
    deadline: Yup.date().required('DeadLine is required !')
  })
    
    let formik = useFormik({
      initialValues: {
        title:"",
        description: "",
        assignTo:"",
        deadline: ""
      },
      validationSchema,
      onSubmit: (values)=>{
        dispatch(updateTask({paramID: selectedTask.id, values}))
        navigate("/tasks/all")
      }
    })


  return (
    <div className='h-100 position-relative '>
    
    <form onSubmit={formik.handleSubmit}>

      <div className="row justify-content-center">
        {allTasks?.tasks?.length === 0 ? <div className='w-100 h-100 d-flex mt-5 pt-5'><i className="fa-solid mx-auto fa-spinner fa-spin-pulse fa-2xl load mt-5 "></i></div>  : ""}
        {allTasks?.tasks?.filter((task) => task._id === selectedTask.id).map(task =>
        <div key={task._id} className="col-md-10 bg-info bg-opacity-10 rounded-5 position-relative mb-4 p-3">
          <h3 className='text-center mb-3 text-color'>{task.title}</h3>

          <div className='row mb-2 justify-content-center '>
            <div className="col-md-5 me-4">
            <h6 className='d-inline-block text-color fs-5 me-3'>Assigned to: <span className='fw-normal text-white fs-6 '>{task.assignTo.userName}</span></h6>
            </div>
            <div className="col-md-5">
            <h6 className='d-inline-block text-color fs-5 me-3'>Status: <span className='fw-normal text-white fs-6 '>{task.status}</span></h6>
            </div>
          </div>

          <div className='row mb-2 justify-content-center '>
            <div className="col-md-5 me-4">
            <h6 className='d-inline-block text-color fs-5 me-3'>Description: <span className='fw-normal text-white fs-6 '>{task.description}</span></h6>
            </div>
            <div className="col-md-5">
            <h6 className='d-inline-block text-color fs-5 me-3'>Email: <span className='fw-normal text-white fs-6 '>{task.assignTo.email}</span></h6>
            </div>
          </div>

          <div className='row mb-2 justify-content-center '>
            <div className="col-md-5 me-4">
            <h6 className='d-inline-block text-color fs-5 me-3'>Deadline: <span className='fw-normal text-white fs-6 '>{task.deadline}</span></h6>
            </div>
            <div className="col-md-5">
            <h6 className='d-inline-block text-color fs-5 me-3'>userId: <span className='fw-normal text-white fs-6 '>{task.assignTo._id}</span></h6>
            </div>
          </div>
            <button onClick={()=> removeTask(task._id)} className='btn btn-outline-danger mx-auto mt-3 py-1 d-block'>Delete</button>
        </div>)}
      </div>

    <div className='w-50 mx-auto '>
    
    {formik.errors.title && formik.touched.title ?
    <div className="alert alert-danger py-2 px-3 mb-1"><h6>Error: 
      <span className='fw-light text-danger-emphasis'> {formik.errors.title}</span></h6></div>
    : ""}
    {formik.errors.description && formik.touched.description ?
    <div className="alert alert-danger py-2 px-3 mb-1"><h6>Error: 
      <span className='fw-light text-danger-emphasis'> {formik.errors.description}</span></h6></div>
    : ""}
    {formik.errors.assignTo && formik.touched.assignTo ?
    <div className="alert alert-danger py-2 px-3 mb-1"><h6>Error: 
      <span className='fw-light text-danger-emphasis'> {formik.errors.assignTo}</span></h6></div>
    : ""}
    {formik.errors.deadline && formik.touched.deadline ?
    <div className="alert alert-danger py-2 px-3 mb-1"><h6>Error:
      <span className='fw-light text-danger-emphasis'> {formik.errors.deadline}</span></h6></div>
    : ""}
    </div>

      <div className="row justify-content-center mb-5">
        <div className="form-group col-md-3 me-3 my-4">
          <input type="text" className='form-control bg-dark-subtle bg-opacity-10'
          name='title' id='title' placeholder='Task Title'
          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}/>
        </div>

        <div className="form-group col-md-3 me-3 my-4">
          <input type="text" className='form-control bg-dark-subtle bg-opacity-10'
          name='assignTo' placeholder='Task for who?' id='assignTo'
          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.assignTo}/>
        </div>

        <div className="form-group col-md-3 my-4">
          <input type="date" className='form-control bg-dark-subtle bg-opacity-10'
          name='deadline' id='deadline'
          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.deadline}/>
        </div>

        <div className="form-group col-md-10">
      <textarea onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}
        className="form-control bg-dark-subtle bg-opacity-25 col-md-10" name="description" id='description'
            rows={7} placeholder="Description of task"/>
        </div>
        <button type="submit" className='btn btndiv mx-auto w-25 mt-5  btn-outline-info'>
          <i className="fa-regular fa-paper-plane me-2"></i>Update</button>
      </div>
    </form>
    

    
    </div>
  )
}


