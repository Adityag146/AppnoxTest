import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    responseData: [],
  }
export const appnoxReducer=createSlice({
    name:'counter',
    initialState,
    reducers:{
        responseData:(state,action)=>{
            state.responseData=action.payload
        }
        
    }
})

export const {responseData,deleteItem}=appnoxReducer.actions
export default appnoxReducer.reducer