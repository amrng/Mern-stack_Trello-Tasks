import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';


export default function Register() {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, dirtyFields },
		register,
	} = useForm();

  const [isLoading, setisloading] = useState(false);
  const { control, handleSubmit, formState: { errors, dirtyFields }, register } = useForm();
  const apiUrl = 'https://trello-application.onrender.com/signup';
  let navigate = useNavigate()
  const onSubmit = async (data) => {
    setisloading(true)
    await axios.post(apiUrl, data).then((res) => {
      console.log(res);
      if (res.data.message === "Successfully signed up") {
        console.log("HIIII");
        navigate('/login')
        setisloading(false)
      } else {
        setisloading(false)
        console.log("7ot isLoading b false");
      }
    }).catch((err) => {
      setisloading(false)
      console.log(err);
    });


  };

  return <>
    <section>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mx-auto py-5 bg-info bg-opacity-10 rounded-5">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5 text-white">Create an account</h2>
                  <form className='' onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <div className="form-outline mb-4">
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: 'Email is required'
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
                            value: /^[A-Z][a-z0-9]{5,10}$/,
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
                            value: /^(?=[a-zA-Z0-9]{3,15}$)[a-zA-Z0-9]*$/,
                            message: 'Invalid User Name format',
                          },
                        }}
                        render={({ field }) => (
                          <div>
                            <input
                              {...field}
                              type="text"
                              id="userName"
                              className="form-control form-control-lg"
                              placeholder='User Name'
                              name='userName'
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
                        className="btn btn-outline-info btn-lg gradient-custom-4 text-body"
                      >
                        {isLoading ? (
                          <i className="fa-solid fa-spinner fa-spin-pulse text-white me-2"></i>
                        ) : ""}
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

											<div className="d-flex justify-content-center">
												<button
													type="submit"
													className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
													disabled={!!errors.email}>
													Register
												</button>
											</div>
											<p className="text-center text-muted mt-5 mb-0">
												Have already an account?{' '}
												<Link to="/login" className="fw-bold text-body">
													<u>Login here</u>
												</Link>
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
