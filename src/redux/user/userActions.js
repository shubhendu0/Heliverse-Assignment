import { createAsyncThunk } from '@reduxjs/toolkit'
import userService from "./userServices";


// CREATE USER
export const createUser = createAsyncThunk(
  "/users/create",
  async (data, thunkAPI) => {
    try {
      return await userService.createUser(data);
    } 
    catch (error) {
      const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


// GET USERS
export const getUsers = createAsyncThunk(
  "/users/get",
  async (query, thunkAPI) => {
    try {
      return await userService.getUsers(query);
    } 
    catch (error) {
      const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


// GET USER BY ID
export const getUser = createAsyncThunk(
    "/users/getById",
    async (id, thunkAPI) => {
      try {
        return await userService.getUser(id);
      } 
      catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)

// DELETE USER
export const deleteUser = createAsyncThunk(
  "/users/delete",
  async (id, thunkAPI) => {
    try {
      return await userService.deleteUser(id);
    } 
    catch (error) {
      const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

// UPDATE USER
export const updateUser = createAsyncThunk(
    "/users/update",
    async (data, thunkAPI) => {
      try {
        return await userService.updateUser(data);
      } 
      catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)