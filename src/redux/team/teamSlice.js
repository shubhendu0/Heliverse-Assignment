import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { 
  createTeam,
  getTeams,
  getTeam
} from "./teamActions";

const initialState = {
  teams: [],
  team: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
      reset: (state) => {
        state.team = null;
      },
    },
    extraReducers: (builder) => {
        builder
        
          //----------------------- Get Teams --------------------//
          .addCase(getTeams.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getTeams.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.teams = action.payload;
            toast.success("Teams Loaded",{
              toastId : "getTeams"
            });
          })
          .addCase(getTeams.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.teams = null;
            toast.error(action.payload,{
              toastId : "error"
            });
          })


        //----------------------- Get Team --------------------//
          .addCase(getTeam.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getTeam.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.team = action.payload;
            toast.success("Team Loaded",{
              toastId : "getTeam"
            });
          })
          .addCase(getTeam.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
            toast.error(action.payload,{
              toastId : "error"
            });
          })


          //------------------------- Create Team ---------------------//
          .addCase(createTeam.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(createTeam.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
            toast.success("Team created",{
              toastId : "createTeam"
            });
          })
          .addCase(createTeam.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
          })
    }
})

export default teamSlice.reducer
export const { reset } = teamSlice.actions;