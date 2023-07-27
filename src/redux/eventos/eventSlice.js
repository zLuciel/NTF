
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   data: null,
  loading: false,
  error: null,
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    fetchEventsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchEventsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchEventsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchEventsStart, fetchEventsSuccess, fetchEventsFailure } = eventSlice.actions;

export default eventSlice.reducer;
