import {createSlice} from '@reduxjs/toolkit'

const cartSlice= createSlice({
     name: 'cartSlice',
     initialState: {
        cart: []
     },
     reducers:{
        addToCart: (state,action) => {
            const product=action.payload.attributes;
            const currItem= product?{
               title: product?.title,
               key: product?.key,
               price: product?.price,
               image: product?.image.data.attributes.url
            }: action.payload;
            const index=state.cart.findIndex((item) => item.key === currItem.key);
            if(index === -1){
                state.cart.push({...currItem, quantity: 1});
            }else{
                state.cart[index].quantity+=1;
            }
        },
        removeFromCart: (state,action) => {
               const currItem=action.payload?.attributes?.key || action.payload.key;
               const index= state.cart.findIndex((item) => item?.key === currItem);
               if(index === -1) return;
               if(state.cart[index].quantity === 1){
                  state.cart= state.cart.filter((item) => item?.key !== currItem)
               }else{
                  state.cart[index].quantity-=1;
               }
        },
        resetCart: (state,action)=>{
         state.cart= []
        }
     },
})
export default cartSlice.reducer;
export const {addToCart, removeFromCart, resetCart} = cartSlice.actions