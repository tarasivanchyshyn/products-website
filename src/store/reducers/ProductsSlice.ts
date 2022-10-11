import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'models/IProduct';

interface ProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: ''
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccesss(state, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = '';
      state.products = action.payload;
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const productsActions = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
