import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './Profile.css';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function Profile() {
	return (
		<div className="my-5 pt-5 overflow-x-hidden">
			<div className="row justify-content-center align-items-start ">
				<div className="col-md-2 p-0 rounded-5 d-flex flex-column align-items-center justify-content-center">
					<Link
						to={`update/${jwtDecode(localStorage.getItem('token')).id}`}
						className="order bg-info bg-opacity-10 px-4 py-5 rounded-top-5 w-100">
						<h5 className="mb-0">
							<i className="fa-regular fa-user fa-lg me-3"></i>Manage account
						</h5>
					</Link>
					<Link
						to={`password/${jwtDecode(localStorage.getItem('token')).id}`}
						className="order bg-info bg-opacity-10 px-4 py-5 w-100 my-2">
						<h5 className="mb-0">
							<i className="fa-solid fa-shield-halved me-3 fa-lg"></i>Security
						</h5>
					</Link>

					<Link
						to={`delete/${jwtDecode(localStorage.getItem('token')).id}`}
						className="order bg-info bg-opacity-10 px-4 py-5 rounded-bottom-5 w-100">
						<h5 className="mb-0">
							<i className="fa-solid fa-trash me-3 fa-lg"></i>Delete account
						</h5>
					</Link>
				</div>

				<div className="col-md-8 p-0 mx-3">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
