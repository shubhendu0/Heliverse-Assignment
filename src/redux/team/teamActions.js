import { createAsyncThunk } from '@reduxjs/toolkit'
import teamService from "./teamServices";

// CREATE TEAM
export const createTeam = createAsyncThunk(
  "/team/create",
  async (data, thunkAPI) => {
    try {
      return await teamService.createTeam(data);
    } 
    catch (error) {
      const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

// GET TEAM
export const getTeams = createAsyncThunk(
  "/team/get",
  async (_, thunkAPI) => {
    try {
      return await teamService.getTeams();
    } 
    catch (error) {
      const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


// GET TEAM BY ID
export const getTeam = createAsyncThunk(
    "/team/getById",
    async (id, thunkAPI) => {
      try {
        return await teamService.getTeam(id);
      } 
      catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)
