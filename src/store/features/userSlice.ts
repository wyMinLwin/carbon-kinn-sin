import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/shared/types";

const initialState: UserType = {
    message: "",
    user_id: 0,
    email: "",
    name: ""
};

const UserSlice = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {
        setUser: (_, action: PayloadAction<UserType>) => action.payload,
    }
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;