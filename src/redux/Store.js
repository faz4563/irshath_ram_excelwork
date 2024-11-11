import { configureStore } from "@reduxjs/toolkit"
import { handleHome } from "./handleMenu/handleMenu";

const store = configureStore({
    reducer:   {
        handleHome
    },
});

export default store;