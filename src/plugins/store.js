import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../plugins/axios";


export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
