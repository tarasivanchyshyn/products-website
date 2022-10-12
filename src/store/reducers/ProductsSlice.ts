import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'models/IProduct';

interface ProductsState {
  products: IProduct[];
}

const initialState: ProductsState = {
  products: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export const productsActions = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
