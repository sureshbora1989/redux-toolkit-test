import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slice/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
