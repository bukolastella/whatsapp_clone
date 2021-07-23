import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, data: dataSlice.reducer },
});

export default store;
