
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  data:[],
  favorite:[],
  editData: null,
  message:null,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUserData: (state,action) => {
      state.user = action.payload.user;
      state.data = action.payload.eventsUser;
    },
    fetchUserFavorite: (state,action) => {
      state.favorite = action.payload;
    },
    dataEdit: (state,action) => {
      state.editData = action.payload;
    },
    messageStatus: (state,action) => {
      state.message = action.payload;
    },
  },
  
});

export const { fetchUserData,dataEdit,fetchUserFavorite,messageStatus } = userSlice.actions;
export default userSlice.reducer;