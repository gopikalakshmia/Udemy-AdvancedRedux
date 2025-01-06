import { configureStore, createSlice } from "@reduxjs/toolkit";
import showCartSlice from "./showCartSlice";
import cartSlice from "./cartSlice";




export const cartAction=cartSlice.actions;
export const showCartAction=showCartSlice.actions;
const store=configureStore({reducer:{cart:cartSlice.reducer,showCart:showCartSlice.reducer}});

export default store;