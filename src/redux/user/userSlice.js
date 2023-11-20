import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { 
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from "./userActions";

const initialState = {
  users: [],
  totalPages: 0,
  user: {},
  domainList: [],
  listLength: 10,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      reset: (state) => {
        state.user = null;
      }
    },
    extraReducers: (builder) => {
        builder

          //----------------------- Get Users --------------------//
          .addCase(getUsers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.users = action.payload.items;
            state.domainList = action.payload.domainList;
            state.totalPages = action.payload.totalPages;
            toast.success("Users Loaded",{
              toastId : "getUsers"
            });
          })
          .addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.users = null;
            state.domainList = [];
            state.totalPages = 0;
            toast.error(action.payload,{
              toastId : "error"
            });
          })


        //----------------------- Get User By Id --------------------//
          .addCase(getUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            toast.success("User Loaded",{
              toastId : "getUser"
            });
          })
          .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
            toast.error(action.payload,{
              toastId : "error"
            });
          })


          //------------------------- Create User ---------------------//
          .addCase(createUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
            toast.success("User created",{
              toastId : "createUser"
            });
          })
          .addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
          })


          //------------------------- Update User ---------------------//
          .addCase(updateUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
            toast.success("User Updated.",{
              toastId : "updateUser"
            });
          })
          .addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
          })

          //------------------------- Delete User ---------------------//
          .addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
            toast.success("User deleted.",{
              toastId : "removeUser"
            });
          })
          .addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
          })
    }
})

export default userSlice.reducer
export const { reset, selectUsers } = userSlice.actions;