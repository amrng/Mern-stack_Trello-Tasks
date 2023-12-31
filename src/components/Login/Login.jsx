import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';

// import style from './Login.css';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { TokenContext } from '../../Context/token';
import axios from 'axios';
import { useFormik } from 'formik';
import GoogleSignin from './GoogleSignin';

export default function Login() {
	const [isLoading, setIsLoading] = useState();
	const [apiErrors, setApiErrors] = useState();
	// const queryClient = useQueryClient();
	let navigate = useNavigate();
	let { setToken } = useContext(TokenContext);

	//validation:
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Invalid Email adress')
			.required('Email is required'),
		password: Yup.string()
			.required('Password is required')
			.matches(
				/^[A-Z][a-z0-9]{5,10}$/,
				'Password should start with Capital letter and contain numbers'
			),
	});
	let formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			loginMutation.mutate(values);
		},
	});

	const loginMutation = useMutation(
		(values) => {
			setIsLoading(true);
			return axios.post(
				'https://trello-application.onrender.com/signin',
				values
			);
		},
		{
			onSuccess: (data) => {
				if (data.data.message === 'Successfully signed in, Welcome back') {
					setIsLoading(false);
					localStorage.setItem('token', data.data.token);
					setToken(data.data.token);
					// queryClient.invalidateQueries('/tasks');
					navigate('/');
				}
			},
			onError: (err) => {
				setIsLoading(false);
				setApiErrors(err.response.data.message);

				formik.setFieldError('password', err.response.data.message);
			},
		}
	);

	return (
		<>
			<section>
				<div className="mask d-flex align-items-center h-100 gradient-custom-3">
					<div className="container h-100">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col-12 col-md-9 col-lg-7 col-xl-6">
								<div className="card mx-auto py-5 bg-info bg-opacity-10 rounded-5">
									<div className="card-body p-5">
										<h2 className="text-uppercase text-center mb-5 text-white">
											Login
										</h2>
										<form className="" onSubmit={formik.handleSubmit}>
											<div className="form-outline mb-4">
												<input
													type="email"
													className="form-control form-control-lg"
													placeholder="Enter your email"
													id="email"
													name="email"
													value={formik.values.email}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												{formik.errors.email && formik.touched.email ? (
													<span className="text-danger ms-3 fw-bold">
														{formik.errors.email}
													</span>
												) : (
													''
												)}
											</div>
											<div className="form-outline mb-4">
												<input
													type="password"
													className="form-control form-control-lg"
													placeholder="password"
													id="password"
													name="password"
													value={formik.values.password}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												{formik.errors.password && formik.touched.password ? (
													<div className="text-danger ms-3 fw-bold">
														{formik.errors.password}
													</div>
												) : (
													''
												)}
											</div>
											{apiErrors ? (
												<div className="text-danger m-3 fw-bold text-center">
													{apiErrors}
												</div>
											) : (
												''
											)}
											<div className="d-flex justify-content-center">
												<button
													type="submit"
													className="btn btn-outline-info btn-block btn-lg gradient-custom-4 text-body">
													{isLoading ? (
														<i className="fa fa-spin fa-spinner"></i>
													) : (
														<>Login</>
													)}
												</button>
											</div>
											<div className="d-flex justify-content-center mt-4">
												<GoogleSignin />
											</div>
											<p className="text-center  mt-5 mb-0 text-white">
												Dont have an account?
												<Link
													to={'/register'}
													className="fw-bold ms-3 text-white">
													<u>Register here</u>
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

// function continueGoogle() {
// 	window.open('https://trello-application.onrender.com/google', '_self');
// }

// useEffect(() => {
// 	const searchParams = new URLSearchParams(location.search);
// 	const token = searchParams.get('token');
// 	console.log('Received token:', token);
// 	if (token) {
// 		localStorage.setItem('token', token); // Store the token in local storage
// 		setToken(token); // Set the token in your TokenContext or state if needed
// 		navigate('/tasks', { replace: true }); // Navigate to the '/tasks' route
// 	}
// }, [location.search, navigate, setToken]);
