import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IProduct = {
    id: string;
    title: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const index = state.findIndex((pro) => pro.id === action.payload.id);
            if (index === -1) {
                state.push(action.payload);
            } else {
                return state.map((item) => {
                    return item.id === action.payload.id ?
                        { ...item, quantity: item.quantity + 1 } : item;
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            return state.filter((pro) => pro.id !== action.payload);
        },
        clearCart: () => initialState,
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;