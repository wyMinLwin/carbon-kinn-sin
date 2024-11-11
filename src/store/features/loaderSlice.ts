import {createSlice} from "@reduxjs/toolkit";

export const LoaderSlice = createSlice({
    name: "Loader",
    initialState: false,
    reducers: {
        openLoader: () => true,
        hideLoader: () => false
    }
})

export const {openLoader, hideLoader} = LoaderSlice.actions
export default LoaderSlice.reducer