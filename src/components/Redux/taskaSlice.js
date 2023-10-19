import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

const baseUrl = "https://trello-application.onrender.com/task";
// let jwtDecode(localStorage.getItem("token")) = jwtDecode(localStorage.getItem("token"));

export const addTask = createAsyncThunk("Tasks/addTask", async (values) => {
  await axios
    .post(
      `${baseUrl}/addTask/${jwtDecode(localStorage.getItem("token")).id}`,
      values,
      {
        headers: { token: localStorage.getItem("token") },
      }
    )
    .then((res) => {
      toast.success(res.data.message, {
        duration: 6000,
        position: "bottom-right",
        style: {
          border: "2px solid rgb(245, 158, 11)",
          margin: "0 30px 30px 0",
        },
        icon: <i className="fa-solid fa-circle-check text-success"></i>,
      });
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        duration: 6000,
        position: "bottom-right",
        style: {
          border: "2px solid rgb(245, 158, 11)",
          margin: "0 30px 30px 0",
        },
        icon: <i className="fa-solid fa-circle-exclamation text-danger "></i>,
      });
    });
});

export const updateTask = createAsyncThunk(
  "Tasks/updateTask",
  async ({ paramID, values }) => {
    await axios
      .patch(`${baseUrl}/updateTask/${paramID}`, values, {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        toast.success(res.data.message, {
          duration: 6000,
          position: "bottom-right",
          style: {
            border: "2px solid rgb(245, 158, 11)",
            margin: "0 30px 30px 0",
          },
          icon: <i className="fa-solid fa-circle-check text-success"></i>,
        });
      })
      .catch((err) =>
        toast.error(err.response.data.message, {
          duration: 6000,
          position: "bottom-right",
          style: {
            border: "2px solid rgb(245, 158, 11)",
            margin: "0 30px 30px 0",
          },
          icon: <i className="fa-solid fa-circle-exclamation text-danger "></i>,
        })
      );
  }
);

export const deleteTask = createAsyncThunk(
  "Tasks/deleteTask",
  async (paramID) => {
    await axios
      .delete(`${baseUrl}/updateTask/${paramID}`, {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        toast.success(res.data.message, {
          duration: 6000,
          position: "bottom-right",
          style: {
            border: "2px solid rgb(245, 158, 11)",
            margin: "0 30px 30px 0",
          },
          icon: <i className="fa-solid fa-circle-check text-success"></i>,
        });
      })
      .catch((err) =>
        toast.error(err.response.data.message, {
          duration: 6000,
          position: "bottom-right",
          style: {
            border: "2px solid rgb(245, 158, 11)",
            margin: "0 30px 30px 0",
          },
          icon: <i className="fa-solid fa-circle-exclamation text-danger "></i>,
        })
      );
  }
);

export const getAllTasks = createAsyncThunk("Tasks/getAllTasks", async () => {
  const response = await axios.get(`${baseUrl}/getAllTasksWithUsersData`, {
    headers: { token: localStorage.getItem("token") },
  });
  return response.data.tasks;
});

export const getDelayedTasks = createAsyncThunk("Tasks/getTasks", async () => {
  const response = await axios.get(`${baseUrl}/getaDelayedTasks`, {
    headers: { token: localStorage.getItem("token") },
  });
  return response.data.tasksDelayed;
});

export let tasksSlice = createSlice({
  name: "Tasks",
  initialState: {
    tasks: [],
    delayed: [],
    loading: false,
  },
  reducers: {
    isLoading(state) {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.addTask = action.payload;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.updateTask = action.payload;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.deleteTask = action.payload;
    });
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.loading = true;
      state.tasks = action.payload;
      state.loading = false;
    });
    builder.addCase(getDelayedTasks.fulfilled, (state, action) => {
      state.loading = true;
      state.delayed = action.payload;
      state.loading = false;
    });
  },
});

export let taskReducer = tasksSlice.reducer;
export let { isLoading } = tasksSlice.actions;
