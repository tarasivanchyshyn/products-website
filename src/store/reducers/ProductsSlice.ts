import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'models/IProduct';

interface ProductsState {
  products: IProduct[];
  searchValue: string;
  searchCategory: string;
  choosedFarm: string;
}

const initialState: ProductsState = {
  products: [],
  searchValue: '',
  searchCategory: '',
  choosedFarm: ''
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    searchCategory: (state, action: PayloadAction<string>) => {
      state.searchCategory = action.payload;
    },
    chooseFarm: (state, action: PayloadAction<string>) => {
      state.choosedFarm = action.payload;
    }
  }
});

export const productsActions = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
