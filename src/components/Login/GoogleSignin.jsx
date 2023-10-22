import React, { useContext, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../Context/token';

const GoogleSignin = () => {
	const navigate = useNavigate();
	const [, setIsLoading] = useState(false);
	let { setToken } = useContext(TokenContext);

	return (
		<div className="flex items-center z-10 justify-center">
			<GoogleLogin
				onSuccess={async (credentialResponse) => {
					setIsLoading(true);
					await axios
						.post('https://trello-application.onrender.com/continugoogle', {
							credintial: credentialResponse.credential,
						})
						.then((data) => {
							if (
								data.data.message === 'Successfully signed in, Welcome back' ||
								data.data.message === 'Successfully signed up'
							) {
								setIsLoading(false);
								localStorage.setItem('token', data.data.token);
								setToken(data.data.token);
								navigate('/');
							}
						})
						.catch((err) => {
							toast.error('Something went wrong. Please try again.');
						})
						.finally(() => {
							setIsLoading(false);
						});
				}}
				onError={() => {
					toast.error('Login failed');
				}}
				size="large"
				shape="pill"
				type="standard"
				text="Continue with Google"
			/>
		</div>
	);
};

export default GoogleSignin;
