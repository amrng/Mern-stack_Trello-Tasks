import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks, isLoading } from '../../Redux/taskaSlice';
import { useNavigate } from 'react-router-dom';

export default function AllTasks() {
	let allTasks = useSelector((state) => state.Tasks);
	let dispatch = useDispatch();
	let navigate = useNavigate();

	useEffect(() => {
		dispatch(isLoading());
		dispatch(getAllTasks());
	});

	function details(id) {
		return navigate(`/tasks/update/${id}`);
	}

	return (
		<div>
			<div className="row justify-content-evenly ">
				{allTasks?.tasks?.length === 0 ? (
					<h1 className="text-center mb-4">You have no tasks</h1>
				) : (
					''
				)}
				{allTasks?.tasks?.length === 0 && allTasks.loading === true ? (
					<div className="w-100 h-100 d-flex mt-5 pt-5">
						<i className="fa-solid mx-auto fa-spinner fa-spin-pulse fa-2xl load mt-5 "></i>
					</div>
				) : (
					''
				)}

				{allTasks?.tasks?.map((task) => (
					<div
						key={task._id}
						className="col-md-5 bg-info bg-gradient bg-opacity-10 rounded-5 position-relative mb-4 p-3">
						<h3 className="text-center mb-3 text-color">{task.title}</h3>
						<div className="d-flex justify-content-between mb-3">
							<h6 className="d-inline-block text-color fs-5 me-3">
								Assigned to:{' '}
								<span className="fw-normal text-white fs-6 ">
									{task?.assignTo?.userName}
								</span>
							</h6>
							<h6 className="d-inline-block text-color fs-5 me-3">
								Status:{' '}
								<span className="fw-normal text-white fs-6 ">
									{task.status}
								</span>
							</h6>
						</div>
						<h6 className="d-inline-block text-color fs-5 mb-3  me-3">
							Description:{' '}
							<span className="fw-normal text-white fs-6 ">
								{task.description.split(' ').slice(0, 3).join(' ')}
							</span>
						</h6>
						{task.deadline ? (
							<h6 className="text-color fs-5 mb-4  me-3">
								Deadline:{' '}
								<span className="fw-normal text-white fs-6 ">
									{task.deadline}
								</span>
							</h6>
						) : (
							''
						)}

						<button
							onClick={() => details(task._id)}
							className="btn btn-outline-info mx-auto py-1 d-block">
							Details
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

// <div className='w-100 h-100 d-flex mt-5 pt-5'><i className="fa-solid mx-auto fa-spinner fa-spin-pulse fa-2xl load mt-5 "></i></div>
