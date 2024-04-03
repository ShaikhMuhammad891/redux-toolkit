import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
const store = configureStore({
  reducer: {
    name: userSlice,
  },
});

export default store;
