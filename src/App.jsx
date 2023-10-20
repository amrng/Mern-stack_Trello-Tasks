import React, { useContext, useEffect } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Tasks from './components/Tasks/Tasks';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import AddTask from './components/Tasks/AddTask/AddTask';
import AllTasks from './components/Tasks/AllTasks/AllTasks';
import UpdateTask from './components/Tasks/UpdateTask/UpdateTask';
import DelayedTasks from './components/Tasks/DelayedTasks/DelayedTasks';
import { TokenContext } from './Context/token';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import UpdateProfile from './components/Profile/UpdateProfile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword/ChangePassword';
import DeleteAccount from './components/Profile/DeleteAccount/DeleteAccount';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {
	const queryClient = new QueryClient();

	let { setToken } = useContext(TokenContext);
	useEffect(() => {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
		}
	}, [setToken]);

	const routers = createBrowserRouter([
		{
			path: '',
			element: <Layout />,
			children: [
				{ index: true, element: <LandingPage /> },
				{ path: 'login', element: <Login /> },
				{ path: 'register', element: <Register /> },
				{
					path: 'tasks',
					element: (
						<ProtectedRoutes>
							{' '}
							<Tasks />{' '}
						</ProtectedRoutes>
					),
					children: [
						{ path: 'add/:id', element: <AddTask /> },
						{ path: 'all', element: <AllTasks /> },
						{ path: 'update/:id', element: <UpdateTask /> },
						{ path: 'delayed', element: <DelayedTasks /> },
					],
				},
				{
					path: 'profile',
					element: (
						<ProtectedRoutes>
							{' '}
							<Profile />
						</ProtectedRoutes>
					),
					children: [
						{ path: 'update/:id', element: <UpdateProfile /> },
						{ path: 'password/:id', element: <ChangePassword /> },
						{ path: 'delete/:id', element: <DeleteAccount /> },
					],
				},
				{ path: '*', element: <NotFound /> },
			],
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routers}>
				<Layout />
			</RouterProvider>
		</QueryClientProvider>
	);
}
