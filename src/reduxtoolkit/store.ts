import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./feature/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer

  }
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
