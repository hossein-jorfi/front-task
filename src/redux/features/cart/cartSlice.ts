import { productType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export type cartSliceType = {
  products: productType[];
  totalCount: number;
  totalPrice: number;
};

const initialState: cartSliceType = {
  products: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.totalCount++;
      state.totalPrice += action.payload.price;
      if (state.products.find((i) => i.id === action.payload.id)) {
        state.products.map((item) => {
          if (item.id === action.payload.id) {
            item.count = (item.count as number) + 1;
          }
        });
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.totalCount--;
      state.totalPrice -= action.payload.price;
      const selectedItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      state.products.map((item) => {
        if (item.id === action.payload.id) {
          if ((selectedItem?.count as number) > 1) {
            item.count = (item.count as number) - 1;
          } else {
            const index = state.products.findIndex(
              (item) => item.id === action.payload.id
            );
            state.products.splice(index, 1);
          }
        }
      });
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct } = cartSlice.actions;
