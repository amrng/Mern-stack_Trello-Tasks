
import React from 'react'
import style from "./Register.css"
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';

export default function Register() {

  const { control, handleSubmit, formState: { errors, isSubmitting, dirtyFields }, register } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  }

  return <>
    <section>ء
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mx-auto py-5 bg-info bg-opacity-10 rounded-5">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5 text-white">Create an account</h2>
                  <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Invalid email format',
                          },
                        }}
                        render={({ field }) => (
                          <div>
                            <input
                              {...field}
                              type="email"
                              id="email"
                              className="form-control form-control-lg"
                              placeholder='Your Email'
                            />
                            {dirtyFields.email && !field.value && (
                              <p className="text-danger">Email is required</p>
                            )}
                          </div>
                        )}
                      />
                      {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                    <div className="form-outline mb-4">
                      <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: 'Password is required',
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Invalid Password format',
                          },
                        }}
                        render={({ field }) => (
                          <div>
                            <input
                              {...field}
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                              placeholder='Password'
                            />
                            {dirtyFields.password && !field.value && (
                              <p className="text-danger">Password is required</p>
                            )}
                          </div>
                        )}
                      />
                      {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    </div>
                    <div className="form-outline mb-4">
                      <Controller
                        name="userName"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: 'User Name is required',
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Invalid User Name format',
                          },
                        }}
                        render={({ field }) => (
                          <div>
                            <input
                              {...field}
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                              placeholder='User Name'
                            />
                            {dirtyFields.password && !field.value && (
                              <p className="text-danger">User Name is required</p>
                            )}
                          </div>
                        )}
                      />
                      {errors.userName && <p className="text-danger">{errors.userName.message}</p>}
                    </div>
                    <div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
                          Admin
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                        <label className="form-check-label text-white" htmlFor="flexRadioDefault2">
                          User
                        </label>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        disabled={!!errors.email}
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
}
