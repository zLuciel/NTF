
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  data:[],
  favorite:[],
  desactive:[],
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
    },
    fetchEventUser:(state,action)=>{
      state.data = action.payload.filter(event=> event.delete === false);
      state.desactive = action.payload.filter(event=> event.delete === true);
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

export const { fetchUserData,dataEdit,fetchUserFavorite,messageStatus,fetchEventUser } = userSlice.actions;
export default userSlice.reducer;