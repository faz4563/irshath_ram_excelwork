import { createSlice } from "@reduxjs/toolkit";

const initialData = 0
const handleMenuSlice = createSlice({
    name: "handleMenu",
    initialState: initialData,
    reducers: {
        handleMenuHome(state, action) {
            state = 0;
        },
        handleMenuProducts(state, action) {
            state = 1;
        },
        handleMenuAboutUs(state, action) {
            state = 2;
        },
        handleMenuMore(state, action) {
            state = 3;
        },

    }
})
export const { handleMenuHome: handleHome, handleMenuProducts: handleProduct } = handleMenuSlice.actions;

export default handleMenuSlice.reducer;