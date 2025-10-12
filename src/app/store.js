import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/auth/authSlice'

const appStore = configureStore({
    reducer:{
    user : userReducer
    }
})

export default appStore;