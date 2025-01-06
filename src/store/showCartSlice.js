import {  createSlice } from "@reduxjs/toolkit";
const initialState={showCart:false};

const showCartSlice=createSlice({
    name:'showCart',
    initialState,
    reducers:{
        cartVisibility(state){
            state.showCart=!state.showCart;
        },
       
    }
})

export default showCartSlice;