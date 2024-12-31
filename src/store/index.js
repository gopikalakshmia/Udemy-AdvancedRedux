import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState={showCart:false};
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        cartVisibility(state){
            state.showCart=!state.showCart;
        }
    }
})
export const cartAction=cartSlice.actions;
const store=configureStore({reducer:{cart:cartSlice.reducer}});

export default store;