import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { open: false, login: false, username: "", loading: false },
  reducers: {
    openSlide(state) {
      state.open = true;
    },
    closeSlide(state) {
      state.open = false;
    },
    isLoggin(state, action) {
      state.login = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
