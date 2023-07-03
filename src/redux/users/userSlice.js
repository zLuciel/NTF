
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  data:null,
  editData: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUserData: (state,action) => {
      state.user = action.payload.user;
      state.data = action.payload.eventsUser;
      //state.error = null;
    },
    dataEdit: (state,action) => {
      state.editData = action.payload;
      //state.error = null;
    },
  },
  
});

export const { fetchUserData,dataEdit } = userSlice.actions;
export default userSlice.reducer;