import {  createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={items:[]};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
       
        addTocart(state,action){
    
            if(state.items.length>0){
                const findIndexValue=state.items.findIndex((element)=>element.title===action.payload.title);
                //product in not already in the cart
                if(findIndexValue===-1){
                    state.items.push({title:action.payload.title,Qty:1,price:action.payload.price,description:action.payload.description});
                }
                else{
                    state.items[findIndexValue].Qty=state.items[findIndexValue].Qty+1;
                }
               
            }
            else{
                state.items.push({title:action.payload.title,Qty:1,price:action.payload.price,description:action.payload.description});
                
            }
           
        },
        removeFromCart(state,action){
            if(state.items.length>0){
                const findIndexValue=state.items.findIndex((element)=>element.title===action.payload.title);
                //product in not already in the cart
                if(findIndexValue===-1){
                  console.log("not found");
                }
                else{
                    if(state.items[findIndexValue].Qty>1)
                    state.items[findIndexValue].Qty=state.items[findIndexValue].Qty-1;
                    else
                    {
                        state.items=state.items.filter(element=>element.title!==action.payload.title);
                        console.log(state.items.length);
                    }
               
            }
        }
    }
    }
})

export default cartSlice;