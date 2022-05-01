import { configureStore } from "@reduxjs/toolkit"; 
import { postSlice } from "./reducers/reducer";


let store = configureStore({
    reducer:{
        postReducer:postSlice.reducer,
    }
})

export default store;