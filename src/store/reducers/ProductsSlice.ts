import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'models/IProduct';

interface ProductsState {
  products: IProduct[];
  searchValue: string;
}

const initialState: ProductsState = {
  products: [],
  searchValue: ''
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchValue = action.payload;
    }
  }
});

export const productsActions = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
