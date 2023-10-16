// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import jwtDecode from "jwt-decode";

// const baseUrl = "https://trello-application.onrender.com/task";
// let decoded = jwtDecode(localStorage.getItem("token"));

// export const addTask = createAsyncThunk(
//   "Tasks/addTask",
//   async ({ taskContent }) => {
//     const response = await axios.post(
//       `${baseUrl}/addTask/${decoded.id}`,
//       {
//         taskContent,
//       },
//       {
//         headers: localStorage.getItem("token"),
//       }
//     );
//     console.log(response);
//   }
// );

// export const updateTask = createAsyncThunk(
//   "Tasks/updateTask",
//   async ({ taskContent }) => {
//     const response = await axios.patch(
//       `${baseUrl}/updateTask/${decoded.id}`,
//       { taskContent },
//       { headers: localStorage.getItem("token") }
//     );
//     console.log(response);
//   }
// );

// export const deleteTask = createAsyncThunk(
//   "Tasks/deleteTask",
//   async ({ taskContent }) => {
//     const response = await axios.delete(
//       `${baseUrl}/deleteTask/${decoded.id}`,
//       { taskContent },
//       { headers: localStorage.getItem("token") }
//     );
//     console.log(response);
//   }
// );

// export const getAllTasks = createAsyncThunk("Tasks/getTasks", async () => {
//   const response = await axios.get(
//     `${baseUrl}/getAllTasksWithUsersData/${decoded.id}`,
//     { headers: localStorage.getItem("token") }
//   );
//   console.log(response);
// });

// export const getDelayedTasks = createAsyncThunk("Tasks/getTasks", async () => {
//   const response = await axios.get(
//     `${baseUrl}/getAllTasksWithUsersData/${decoded.id}`,
//     { headers: localStorage.getItem("token") }
//   );
//   console.log(response);
// });

// export let tasksSlice = createSlice({
//   name: "Tasks",
//   initialState: {
//     tasks: [],
//   },
//   extraReducers: (builder) => {
//     builder.addCase(addTask.fulfilled, (state, action) => {
//       state.addTask = action.payload;
//       console.log(action.payload);
//     });
//     builder.addCase(updateTask.fulfilled, (state, action) => {
//       state.updateTask = action.payload;
//       console.log(action.payload);
//     });
//     builder.addCase(deleteTask.fulfilled, (state, action) => {
//       state.deleteTask = action.payload;
//       console.log(action.payload);
//     });
//     builder.addCase(getAllTasks.fulfilled, (state, action) => {
//       state.getAllTasks = action.payload;
//       console.log(action.payload);
//     });
//     builder.addCase(getDelayedTasks.fulfilled, (state, action) => {
//       state.getDelayedTasks = action.payload;
//       console.log(action.payload);
//     });
//   },
// });

// export let taskReducer = tasksSlice.reducer;
