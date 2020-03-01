import { configureStore, createSlice } from "@reduxjs/toolkit";


export const bpStore = createSlice({
    name:"bpStore",
    initialState:"hi",
    reducers: {
        addName: (state, action ) => {
            return `hi ${action.payload}`
        }
    }
});

export const store = configureStore({
    reducer:{
        bpStore:bpStore.reducer
    }
});