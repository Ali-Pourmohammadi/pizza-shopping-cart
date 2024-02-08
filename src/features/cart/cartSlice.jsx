/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

const initialState  =  {
    cart : [
        // {
        //     pizzaId: null,
        //     name: "",
        //     quantity:null,
        //     unitPrice : null,
        //     totalPrice : null
        // }
    ]
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state , action){
            state.cart.push(action.payload);
        },
        deleteItem(state , action){
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        increaseQuantity(state,action){
            const item = state.cart(item=> item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseQuantity(state,action){
            const item = state.cart(item=> item.id === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice
        },
        clearCart(state ,action){
            state.cart=[]
        }
    }
})
export const {addItem , deleteItem , increaseQuantity , decreaseQuantity , clearCart} = cartSlice.actions;
export default cartSlice .reducer;

//get total pizzas count
export const  getTotalQuantity = (state => state.cart.cart.reduce((sum, item) =>  sum + item.quantity , 0));  
// get total pizzas price  
export const getTotalPrice = (state => state.cart.cart.reduce((sum , item)=> sum + item.unitPrice , 0));
        
    