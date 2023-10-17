
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from "./AddTask.css"
import { useFormik, validateYupSchema } from 'formik'
import * as Yup from 'yup'


export default function AddTask() {

  let validateYupSchema = Yup.object({
    title: Yup.string(),
    description: Yup.string().max(300, "Maximmum 300 Char")
  })
    
    let formik = useFormik({
      initialValues: {
        title:"",
        description: "",
        assignTo:"",
        deadLine:""
      },
      validateYupSchema,
      onSubmit: (values)=>{
        console.log(values);
      }
    })



  return (
    <div className='h-100 position-relative '>
    
    <div className='w-50 mx-auto '>
      <div className="alert alert-danger py-0 px-3 mb-1"><p>sadsamdaslknfksnfknasfknaskfnalkfn</p></div>
      <div className="alert alert-danger py-0 px-3 mb-1"><p>sadsamdaslknfksnfknasfknaskfnalkfn</p></div>
      <div className="alert alert-danger py-0 px-3 mb-1"><p>sadsamdaslknfksnfknasfknaskfnalkfn</p></div>
      <div className="alert alert-danger py-0 px-3 mb-1"><p>sadsamdaslknfksnfknasfknaskfnalkfn</p></div>
    </div>


    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">

        <div className="row justify-content-center mb-5">
        <div className="col-md-3 me-3 my-4">
          <input type="text" className='form-control bg-dark-subtle bg-opacity-10' name='title' placeholder='Task Title'
                onChange={formik.handleBlur} onBlur={formik.handleBlur} value={formik.values.title}/>
        </div>
        <div className="col-md-3 me-3 my-4">
          <input type="text" className='form-control bg-dark-subtle bg-opacity-10' name='assignTo' placeholder='Task for who?'
                onChange={formik.handleBlur} onBlur={formik.handleBlur} value={formik.values.assignTo}/>
        </div>
        <div className="col-md-3 my-4">
          <input type="date" className='form-control bg-dark-subtle bg-opacity-10' name='deadLine' placeholder='Task for who?'
                onChange={formik.handleBlur} onBlur={formik.handleBlur} value={formik.values.deadLine}/>
        </div>
        <div className="col-md-10">
      <textarea onChange={formik.handleChange} value={formik.values.description}
        className="form-control bg-dark-subtle bg-opacity-25 col-md-10" name="description"
            rows={7} placeholder="Description of task"/>
        </div>
        </div>
      

      <div className="d-flex justify-content-center btndiv">
      <button type="submit" className='btn btn-outline-info me-5'><i class="fa-regular fa-paper-plane me-2"></i>Submit</button>
      <button type="reset" className='btn btn-outline-info '><i class="fa-solid fa-eraser me-2"></i>Reset</button>
      </div>
      </div>
    </form>
    
    
    
    </div>
  )
}
