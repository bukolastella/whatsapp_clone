import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { open: false },
  reducers: {
    openSlide(state) {
      state.open = true;
    },
    closeSlide(state) {
      state.open = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
