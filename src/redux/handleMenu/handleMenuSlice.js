import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menuValue: null,
    dropdownVisible: false, 
};

const handleMenuSlice = createSlice({
    name: 'handleMenu',
    initialState,
    reducers: {
        handleHome: (state, action) => {
            state.menuValue = action.payload;
        },
        handleProduct: (state, action) => {
            state.menuValue = action.payload;
        },
        handleMenuAboutUs: (state, action) => {
            state.menuValue = action.payload;
        },
        handleMenuFeatures: (state, action) => {
            state.menuValue = action.payload;
        },
        handleMenuMore: (state, action) => {
            state.menuValue = action.payload;
        },
        toggleDropdown: (state) => {
            state.dropdownVisible = !state.dropdownVisible;
        }, // Add this action
    },
});

export const {
    handleHome,
    handleProduct,
    handleMenuAboutUs,
    handleMenuFeatures,
    handleMenuMore,
    toggleDropdown, // Export the new action
} = handleMenuSlice.actions;

export default handleMenuSlice.reducer;
