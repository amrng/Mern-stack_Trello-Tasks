import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import style from './Navbar.css';
import { TokenContext } from '../../Context/token';

export default function Navbar() {
	let { token, setToken } = useContext(TokenContext);
	let navigate = useNavigate();
	function logout() {
		localStorage.removeItem('userToken');
		setToken(null);
		navigate('/login');
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg w-50 mx-auto  bg-danger mb-5 ">
				<div className="container-fluid px-4 ">
					<Link to="/" className="navbar-brand text-white">
						<span className="text-color">T</span>rello
					</Link>
					<button
						className="navbar-toggler text-color"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon  " />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							{token ? (
								<>
									<li className="nav-item">
										<Link
											to="/profile"
											className="nav-link text-color"
											aria-current="page">
											Profile
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/tasks"
											className="nav-link text-color"
											aria-current="page">
											Tasks
										</Link>
									</li>
									<li className="nav-item">
										<button
											className="nav-link"
											style={{ backgroundColor: 'white' }}
											onClick={logout}>
											Logout
										</button>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<Link to="/register" className="nav-link text-color">
											Register
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/login" className="nav-link text-color">
											Login
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
