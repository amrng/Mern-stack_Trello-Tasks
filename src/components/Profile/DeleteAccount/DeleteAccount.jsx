import React, { useContext } from 'react';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import style from './DeleteAccount.css';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import toast from 'react-hot-toast';
import { TokenContext } from '../../../Context/token';

export default function DeleteAccount() {
	const [showDeletePopUp, setShowDeletePopUp] = useState(false);
	const [showDeactivatePopUp, setShowDeactivatePopUp] = useState(false);
	let { setToken } = useContext(TokenContext);

	const handelOpenPopUpDelet = () => {
		setShowDeletePopUp(true);
	};

	const handelOpenPopUpDeactivate = () => {
		setShowDeactivatePopUp(true);
	};
	const closeDeletePopUp = () => {
		setShowDeletePopUp(false);
	};

	const closeDeactivatePopUp = () => {
		setShowDeactivatePopUp(false);
	};

	function deleteAccount() {
		axios
			.delete(
				`https://trello-application.onrender.com/user/deleteUser/${
					jwtDecode(localStorage.getItem('token')).id
				}`,
				undefined,
				{
					headers: { token: localStorage.getItem('token') },
				}
			)
			.then((data) => {
				console.log(data);
				toast.success(data.data.message, {
					duration: 6000,
					position: 'bottom-right',
					style: {
						border: '2px solid rgb(245, 158, 11)',
						margin: '0 30px 30px 0',
					},
					icon: <i className="fa-solid fa-circle-check text-success"></i>,
				});
				localStorage.removeItem('token');
				setToken(null);
				closeDeletePopUp();
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.response.data.message, {
					duration: 6000,
					position: 'bottom-right',
					style: {
						border: '2px solid rgb(245, 158, 11)',
						margin: '0 30px 30px 0',
					},
					icon: <i className="fa-solid fa-circle-exclamation text-danger "></i>,
				});
				closeDeletePopUp();
			});
	}
	function deactivate() {
		axios
			.put(
				`https://trello-application.onrender.com/user/softDeleteUser/${
					jwtDecode(localStorage.getItem('token')).id
				}`,
				undefined,
				{
					headers: { token: localStorage.getItem('token') },
				}
			)
			.then((data) => {
				toast.success(data.data.message, {
					duration: 6000,
					position: 'bottom-right',
					style: {
						border: '2px solid rgb(245, 158, 11)',
						margin: '0 30px 30px 0',
					},
					icon: <i className="fa-solid fa-circle-check text-success"></i>,
				});
				localStorage.removeItem('token');
				setToken(null);
				closeDeactivatePopUp();
			})
			.catch((err) => {
				toast.error(err.response.data.message, {
					duration: 6000,
					position: 'bottom-right',
					style: {
						border: '2px solid rgb(245, 158, 11)',
						margin: '0 30px 30px 0',
					},
					icon: <i className="fa-solid fa-circle-exclamation text-danger "></i>,
				});
				closeDeactivatePopUp();
			});
	}

	return (
		<>
			<section>
				<div className="mask d-flex align-items-center h-100 gradient-custom-3">
					<div className="container h-50">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col-12 col-md-10 col-lg-8 col-xl-6">
								<div className="card mx-auto py-5 bg-info bg-opacity-10 rounded-5">
									<div className="card-body p-5">
										<h5 className=" text-center mb-5 text-white">
											Before proceeding, please choose whether you want to
											delete or deactivate your account:
										</h5>

										<div className="d-flex justify-content-center">
											<button
												onClick={handelOpenPopUpDeactivate}
												className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body w-75 m-4">
												Deactivate account
											</button>
										</div>

										<Modal
											show={showDeactivatePopUp}
											onHide={() => setShowDeactivatePopUp(false)}>
											<Modal.Header
												className=" bg-secondary"
												closeButton={() => setShowDeactivatePopUp(false)}>
												<Modal.Title>Deactivate Account</Modal.Title>
											</Modal.Header>
											<Modal.Body className=" bg-secondary">
												Are you sure you want to deactivate your account?
												<br />
												Your account will be temporarily disabled, and you can
												reactivate it at any time.
											</Modal.Body>
											<Modal.Footer className=" bg-secondary">
												<Button
													variant="light"
													onClick={() => setShowDeactivatePopUp(false)}>
													Close
												</Button>
												<Button variant="warning" onClick={deactivate}>
													Deactivate
												</Button>
											</Modal.Footer>
										</Modal>

										<div className="d-flex justify-content-center ">
											<button
												onClick={handelOpenPopUpDelet}
												className="btn btn-danger btn-block btn-lg gradient-custom-4 text-body w-75 m-4">
												Delete account
											</button>
										</div>
										<Modal
											show={showDeletePopUp}
											onHide={() => setShowDeletePopUp(false)}>
											<Modal.Header
												className=" bg-secondary"
												closeButton={() => setShowDeletePopUp(false)}>
												<Modal.Title>Delete Account</Modal.Title>
											</Modal.Header>
											<Modal.Body className=" bg-secondary">
												Are you sure you want to delete your account?
												<br /> This action is irreversible and will permanently
												delete all your data.
											</Modal.Body>
											<Modal.Footer className=" bg-secondary">
												<Button
													variant="light"
													onClick={() => setShowDeletePopUp(false)}>
													Close
												</Button>
												<Button variant="danger" onClick={deleteAccount}>
													Delete
												</Button>
											</Modal.Footer>
										</Modal>
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
