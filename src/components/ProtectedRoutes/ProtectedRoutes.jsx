import React from 'react';
import { Navigate } from 'react-router';
// import style from "./ProtectedRoutes.css"

export default function ProtectedRoutes(props) {
	if (localStorage.getItem('token')) {
		return props.children;
	} else {
		return <Navigate to={'/login'} />;
	}
}
