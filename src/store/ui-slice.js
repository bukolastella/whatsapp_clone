import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    open: false,
    login: false,
    username: "",
    loading: false,
    delete: false,
    deleteId: "",
    check: false,
  },
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
    setDelete(state) {
      state.delete = !state.delete;
    },
    setDeleteId(state, action) {
      state.deleteId = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
