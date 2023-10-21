import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../src/login/authSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
