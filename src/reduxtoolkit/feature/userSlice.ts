import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { loggedUser } from "../../types/user";



const initialState: loggedUser = {
  id: '',
  email: '',
  avatar: '',
  username: '',
  firstName: '',
  lastName: '',
  birthdate: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<loggedUser>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthdate = action.payload.birthdate;
    },

    unSetUser: (state) => {
      state.id = '';
      state.email = '';
      state.avatar = '';
      state.username = '';
      state.firstName = '';
      state.lastName = '';
      state.birthdate = ''
    },
  },
});

export const { setUser, unSetUser } = userSlice.actions;

const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user
export default userReducer;
