import {combineReducers} from "@reduxjs/toolkit";
import LoaderSlice from "./loaderSlice";
import UserSlice from "./userSlice.ts";

export const rootReducer
    = combineReducers({
    loader: LoaderSlice,
    user: UserSlice,
})