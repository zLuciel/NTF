
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const alleventSlice = createSlice({
  name: "allevents",
  initialState,
  reducers: {
    fetchEventsSuccess: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchEventsSuccess } = alleventSlice.actions;

export default alleventSlice.reducer;
