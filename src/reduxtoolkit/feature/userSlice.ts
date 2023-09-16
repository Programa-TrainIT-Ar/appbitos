import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: '',
  email: '',
  avatar: '',
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  birthdate: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.password = action.payload.password;
      state.birthdate = action.payload.birthdate;
    },

    unSetUser: (state) => {
      state.id = '';
      state.email = '';
      state.avatar = '';
      state.username = '';
      state.firstName = '';
      state.lastName = '';
      state.password = '';
      state.birthdate = ''
    },
  },
});

export const { setUser, unSetUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
