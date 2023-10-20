import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import * as Yup from 'yup';
// import style from './ChangePassword.css';
import jwtDecode from 'jwt-decode';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ChangePassword() {
	const [isLoading, setIsLoading] = useState();

	const validationSchema = Yup.object({
		currentPassword: Yup.string().matches(
			/^[A-Z][a-z0-9]{5,10}$/,
			'Password should start with Capital letter and contain numbers'
		),
		newPassword: Yup.string().matches(
			/^[A-Z][a-z0-9]{5,10}$/,
			'Password should start with Capital letter and contain numbers'
		),
	});

	function save(values) {
		setIsLoading(true);
		axios
			.patch(
				`https://trello-application.onrender.com/user/changePassword/${
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
			currentPassword: '',
			newPassword: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			save(values);
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
									<div className="card-body p-">
										<h2 className=" text-center mb-5 text-white">
											Change your password
										</h2>
										<form className="" onSubmit={formik.handleSubmit}>
											<div className="form-outline mb-4">
												<label
													className="pb-3 text-white fw-bold"
													htmlFor="currentPassword">
													Current Password:
												</label>
												<input
													type="password"
													className="form-control form-control-lg"
													placeholder="Enter your current password"
													id="currentPassword"
													name="currentPassword"
													value={formik.values.currentPassword}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												{formik.errors.currentPassword &&
												formik.touched.currentPassword ? (
													<span className="text-danger ms-3 fw-bold">
														{formik.errors.currentPassword}
													</span>
												) : (
													''
												)}
											</div>
											<div className="form-outline mb-4">
												<label
													className="pb-3 text-white fw-bold"
													htmlFor="lastName">
													New Password:
												</label>
												<input
													type="password"
													className="form-control form-control-lg"
													placeholder="Enter your new password"
													id="newPassword"
													name="newPassword"
													value={formik.values.newPassword}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												{formik.errors.newPassword &&
												formik.touched.newPassword ? (
													<div className="text-danger ms-3 fw-bold">
														{formik.errors.newPassword}
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
														<>Save Changes</>
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
