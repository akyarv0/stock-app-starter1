import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import firmSlice from "../features/firmSlice";



const store = configureStore({
  reducer: {
    auth: authReducer,
    firm: firmSlice

 
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
