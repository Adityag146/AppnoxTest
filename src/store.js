import {configureStore } from '@reduxjs/toolkit'
import appnoxReducer from './Reducer/appnoxReducer'
export const store =configureStore({
    reducer:{
        counter:appnoxReducer,
    },

})