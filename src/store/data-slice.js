import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    groupTitle: "Programming Jokes",
    groupOpen: false,
    groupLastMess: {},
  },
  reducers: {
    storeData(state, action) {
      state.data = action.payload;
    },
    changeGroupTitle(state, action) {
      state.groupTitle = action.payload;
    },
    groupOpen(state, action) {
      state.groupOpen = action.payload;
    },
    setGroupLastMess(state, action) {
      state.groupLastMess = action.payload;
    },
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice;
