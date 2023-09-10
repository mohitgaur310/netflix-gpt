import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // as we return from here it will be  stored in initialState
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
