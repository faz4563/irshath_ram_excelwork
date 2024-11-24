import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  menuValue: sessionStorage.getItem("menuValue"),
};

const handleMenuSlice = createSlice({
  name: "handleMenu",
  initialState: initialData,
  reducers: {
    handleMenuHome(state, action) {
      state.menuValue = action.payload;
      sessionStorage.setItem("menuValue","0")
    },
    handleMenuProducts(state, action) {
      state.menuValue = action.payload;
      sessionStorage.setItem("menuValue","1")
    },
    handleMenuAboutUs(state, action) {
      state.menuValue = action.payload;
      sessionStorage.setItem("menuValue","2")
    },
    handleMenuFeatures(state, action) {
      state.menuValue = action.payload;
      sessionStorage.setItem("menuValue","3")
    },
    handleMenuContact(state, action) {
      state.menuValue = action.payload;
      sessionStorage.setItem("menuValue","4")
    },
  },
});

export const {
  handleMenuHome: handleHome,
  handleMenuProducts: handleProduct,
  handleMenuAboutUs: handleMenuAboutUs,
  handleMenuMore: handleMenuMore,
} = handleMenuSlice.actions;

export default handleMenuSlice.reducer;
