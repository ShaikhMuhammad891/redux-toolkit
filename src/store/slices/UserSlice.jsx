import { createSlice, nanoid } from "@reduxjs/toolkit";

const state = [];

const userSlice = createSlice({
  name: "userSlice",
  initialState: state,
  reducers: {
    // add users
    addUser: (state, action) => {
      state.push(action.payload);
    },

    // delete users
    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
    },

    // delete all users
    deleteAllUsers(state, action) {
      return [];
    },
  },
});
export const { addUser, deleteUser, deleteAllUsers } = userSlice.actions;
export default userSlice.reducer;
