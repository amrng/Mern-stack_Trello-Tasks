import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

const baseUrl = "https://trello-application.onrender.com/task";
let decoded = jwtDecode(localStorage.getItem("token"));
console.log("Decoded token", decoded);

export const addTask = createAsyncThunk("Tasks/addTask", async (values) => {
  await axios
    .post(
      `${baseUrl}/addTask/${decoded.id}`,
      { values },
      { headers: { token: localStorage.getItem("token") } }
    )
    .then((res) => {
      console.log(res);
      toast.success(res.response.data.message, {
        duration: 4000,
        position: "bottom-right",
        style: {
          border: "2px solid rgb(245, 158, 11)",
          margin: "0 30px 30px 0",
        },
        icon: <i class="fa-solid fa-circle-check text-success"></i>,
      });
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        duration: 4000,
        position: "bottom-right",
        style: {
          border: "2px solid rgb(245, 158, 11)",
          margin: "0 30px 30px 0",
        },
        icon: <i className="fa-solid fa-circle-exclamation text-danger "></i>,
      });
      console.log(err);
    });
});

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
//       `${baseUrl}/updateTask/${decoded.id}`,
//       { taskContent },
//       { headers: localStorage.getItem("token") }
//     );
//     console.log(response);
//   }
// );

export const getAllTasks = createAsyncThunk("Tasks/getAllTasks", async () => {
  const response = await axios.get(`${baseUrl}/getAllTasksWithUsersData`, {
    headers: { token: localStorage.getItem("token") },
  });
  return response.data.getAllTasksWithUsersData;
});

// export const getDelayedTasks = createAsyncThunk("Tasks/getTasks", async () => {
//   const response = await axios.get(
//     `${baseUrl}/getAllTasksWithUsersData/${decoded.id}`,
//     { headers: localStorage.getItem("token") }
//   );
//   console.log(response);
// });

export let tasksSlice = createSlice({
  name: "Tasks",
  initialState: {
    tasks: [],
  },
  extraReducers: (builder) => {
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.addTask = action.payload;
    });
    // builder.addCase(updateTask.fulfilled, (state, action) => {
    //   state.updateTask = action.payload;
    // });
    // builder.addCase(deleteTask.fulfilled, (state, action) => {
    //   state.deleteTask = action.payload;
    // });
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.getAllTasks = action.payload;
    });
    // builder.addCase(getDelayedTasks.fulfilled, (state, action) => {
    //   state.getDelayedTasks = action.payload;
    //   console.log(action.payload);
    // });
  },
});

export let taskReducer = tasksSlice.reducer;
