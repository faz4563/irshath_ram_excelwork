import { configureStore } from "@reduxjs/toolkit";
import handleMenuReducer from "./handleMenu/handleMenuSlice";

const store = configureStore({
  reducer: {
    handleMenu: handleMenuReducer,
  },
});

export default store;
