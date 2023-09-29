import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";

const initialState = {
    menuItem: [],
};

export const menuItemSlice = createSlice({
    name:"MenuItem",
    initialState: initialState,
    reducers:{
        setMenuItem: (state, action)=>{
            state.menuItem =action.payload;
        },
    },
});

export const { setMenuItem } = menuItemSlice.actions;
export const menuItemReducer = menuItemSlice.reducer;