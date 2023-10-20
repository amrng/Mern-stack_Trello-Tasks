import React, { useState } from 'react';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

// eslint-disable-next-line no-unused-vars
import style from './UpdateProfile.css';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function UpdateProfile() {
	const [isLoading, setIsLoading] = useState();
	const validationSchema = Yup.object({
		firstName: Yup.string().min(3),
		lastName: Yup.string().min(3),
		age: Yup.number().min(12),
	});

	function update(values) {
		setIsLoading(true);
		axios
			.patch(
				`https://trello-application.onrender.com/user/updateUser/${
					jwtDecode(localStorage.getItem('token')).id
				}`,
				values,
				{
					headers: { token: localStorage.getItem('token') },
				}
			)
			.then((data) => {
				toast.success(data.data.message, setIsLoading(false), {
					duration: 6000,
					position: 'bottom-right',
					style: {
						border: '2px solid rgb(245, 158, 11)',
						margin: '0 30px 30px 0',
					},
					icon: <i className="fa-solid fa-circle-check text-success"></i>,
				});
			})
			.catch((err) => {
				toast.error(err.response.data.message, setIsLoading(false), {
					duration: 6000,
					position: 'bottom-right',
					style: {
						border: '2px solid rgb(245, 158, 11)',
						margin: '0 30px 30px 0',
					},
					icon: <i className="fa-solid fa-circle-exclamation text-danger "></i>,
				});
			});
	}

	let formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			age: 12,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			update(values);
		},
	});

	return (
		<>
			<section>
				<div className="mask d-flex align-items-center h-100 gradient-custom-3">
					<div className="container h-100">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col-12 col-md-10 col-lg-8 col-xl-6">
								<div className="card mx-auto py-5 bg-info bg-opacity-10 rounded-5">
									<div className="card-body p-5">
										<h2 className="text-uppercase text-center mb-5 text-white">
											About you
										</h2>
										<form className="" onSubmit={formik.handleSubmit}>
											<div className="form-outline mb-4">
												<label
													className="pb-3 text-white fw-bold"
													htmlFor="firstName">
													First Name:
												</label>
												<input
													type="text"
													className="form-control form-control-lg"
													placeholder="Enter your first name"
													id="firstNamea"
													name="firstName"
													value={formik.values.firstName}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												{formik.errors.firstName && formik.touched.firstName ? (
													<span className="text-danger ms-3 fw-bold">
														{formik.errors.firstName}
													</span>
												) : (
													''
												)}
											</div>
											<div className="form-outline mb-4">
												<label
													className="pb-3 text-white fw-bold"
													htmlFor="lastName">
													Last Name:
												</label>
												<input
													type="text"
													className="form-control form-control-lg"
													placeholder="Enter your last name"
													id="lastName"
													name="lastName"
													value={formik.values.lastName}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												{formik.errors.lastName && formik.touched.lastName ? (
													<div className="text-danger ms-3 fw-bold">
														{formik.errors.lastName}
													</div>
												) : (
													''
												)}
											</div>
											<div className="form-outline mb-4">
												<label
													className="pb-3 text-white fw-bold"
													htmlFor="lastName">
													Age:
												</label>
												<input
													type="number"
													className="form-control form-control-lg"
													placeholder="Enter your age"
													id="ageage"
													name="age"
													value={formik.values.age}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												{formik.errors.age ? (
													<div className="text-danger ms-3 fw-bold">
														{formik.errors.age}
													</div>
												) : (
													''
												)}
											</div>

											<div className="d-flex justify-content-center">
												<button
													type="submit"
													className="btn btn-outline-info btn-block btn-lg gradient-custom-4 text-body">
													{isLoading ? (
														<i className="fa fa-spin fa-spinner"></i>
													) : (
														<>Update</>
													)}
												</button>
											</div>
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
