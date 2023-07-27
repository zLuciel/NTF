
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  countPage:null,
  tags:null,
};

const alleventSlice = createSlice({
  name: "allevents",
  initialState,
  reducers: {
    fetchEventsSuccess: (state, action) => {
      state.data = action.payload.event;
      state.countPage= Math.ceil(action.payload.pageCount/20)
    },
    addTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const { fetchEventsSuccess,addTags } = alleventSlice.actions;

export default alleventSlice.reducer;
