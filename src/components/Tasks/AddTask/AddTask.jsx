
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addTask } from '../../Redux/taskaSlice'
import { useNavigate } from 'react-router-dom'


export default function AddTask() {

  let dispatch = useDispatch()
  let navigate = useNavigate()


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
        dispatch(addTask(values))
        navigate("/tasks/all")
      }
    })



  return (
    <div className='h-100 position-relative '>
    

    <form onSubmit={formik.handleSubmit}>
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
          <i className="fa-regular fa-paper-plane me-2"></i>Submit</button>
      </div>
    </form>
    

    
    </div>
  )
}
